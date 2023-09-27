import React, { useState } from "react";
import Place6 from "../Images/place6.jpg";
import PlaceCard from "../Components/PlaceCard";
import { Button, Grid } from "@mui/material";
import { useStateValue } from "../Context/UseContex";
import { Db } from "../DataBase/Db";
import Meeting_place1 from "../Images/meeting_place1.jpg";
import Meeting_place2 from "../Images/meeting_place2.jpg";
import Meeting_place3 from "../Images/meeting_place3.jpg";
import Meeting_place4 from "../Images/meeting_place4.jpg";
import Meeting_place5 from "../Images/meeting_place5.jpg";
import Meeting_place6 from "../Images/meeting_place6.jpg";
import Meeting_place7 from "../Images/meeting_place7.jpg";
import Meeting_place8 from "../Images/meeting_place8.jpg";
import Open_place4 from "../Images/open_place4.jpg";

const Poster_Text =
  "Enjoy your quality time with love once, friends and family with On-Space.";

const Data = [
  {
    id: 1,
    image: Meeting_place1,
    place_name: "Vega Party Space (Rating : 4.9)",
    area: "HSR Layout, Bangalor",
    price: 699,
  },
  {
    id: 2,
    image: Meeting_place2,
    place_name: "Arun party hall (Rating : 4.7)",
    area: "HSR Layout, Bangalor",
    price: 759,
  },
  {
    id: 3,
    image: Meeting_place3,
    place_name: "Royal place (Rating : 3.5)",
    area: "HSR Layout, Bangalor",
    price: 1699,
  },
  {
    id: 4,
    image: Meeting_place4,
    place_name: "Night King (Rating : 4.5)",
    area: "HSR Layout, Bangalor",
    price: 999,
  },
  {
    id: 5,
    image: Meeting_place5,
    place_name: "Reserviour (Rating : 4)",
    area: "HSR Layout, Bangalor",
    price: 1099,
  },
  {
    id: 6,
    image: Meeting_place6,
    place_name: "Friends Zone (Rating : 4.1)",
    area: "HSR Layout, Bangalor",
    price: 1499,
  },
  {
    id: 7,
    image: Meeting_place7,
    place_name: "0km Club (Rating : 4.3)",
    area: "HSR Layout, Bangalor",
    price: 859,
  },
  {
    id: 8,
    image: Meeting_place8,
    place_name: "TBC party space (Rating : 4.6)",
    area: "HSR Layout, Bangalor",
    price: 1299,
  },
];
const Places = () => {
  const [{ basket }, dispatch] = useStateValue();

  const [data, setData] = useState(Data);
  // const [db, setDb] = useState(Db);
  const [searchdata, setSearchData] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [timefrom, setTimefrom] = useState("");
  const [timefromOut, setTimeToo] = useState("");
  const [date, setDate] = useState("");

  const HandleSearch = (e) => {
    // const searchQuery = e.target.value;
    // setSearchData(searchQuery);
    if (searchdata.trim() === "") {
      // searchQuery  change with searchdata
      alert("Nothing to search");
      setFilteredPlaces([]);
    } else {
      // Filter the places based on the search query
      const filteredPlaces = Db.reduce((filtered, location) => {
        const filteredLocations = location.location.filter(
          (area) => area.area_name.toLowerCase() === searchdata.toLowerCase() // searchQuery  change with searchdata
        );
        if (filteredLocations.length > 0) {
          filtered.push(...filteredLocations[0].place);
        }
        return filtered;
      }, []);

      setFilteredPlaces(filteredPlaces);
    }
    // }
  };

  const HandleTimeIn = (e) => {
    setTimefrom(e.target.value);
  };

  const HandleTimeOut = (e) => {
    setTimeToo(e.target.value);
  };

  const HandleDate = (e) => {
    setDate(e.target.value);
  };

  const DD = () => {
    const Add_Time = {
      timefrom,
      timefromOut,
      date,
    };
    dispatch({
      type: "ADD_DETAILS_TIME_DATE",
      items: Add_Time,
    });
  };
  const AddTimeDate = () => {
    HandleSearch();
    // if (searchdata.trim() === " ") {
    //   alert("Please enter a location to search");
    //   return;
    // }
    // Call DD to dispatch the time and date details
if(date == "" && timefrom == "" && timefromOut == ""){
  alert("pleace enter date and time **")
}else{
  DD();
}
// goodmorning everyone myself  hemnat kumar diwakar Im a full stack develover and currently working as a frontend  reactjs developer as a frontend ui developer my responsibility is to create a website with attractive user innterface and 
    // if (filteredPlaces.length === 0) {
    //   alert("No places found for the entered location");
    //   return;
    // }
  };
  return (
    <div className="place_conatiner">
      <div className="place_wrapper">
        <div className="place_main_container">
          {/* search */}
          <div className="place_search_box">
            <div className="place_search_heading">
              <h4>Book your space according to your choice and demand</h4>
            </div>
            <div className="search-field">
              <input
                type="search"
                placeholder="Search Your Location"
                name="searchdata"
                // value={searchdata}
                onChange={(e) => setSearchData(e.target.value)}
                // onClick={AddTimeDate}
              />
            </div>

            <div className="input-box">
              <div className="search-text-box search-type-input">
                <h2>Enter Location</h2>
                <h3>{searchdata}</h3>
              </div>
              <div className="check-in search-type-input">
                <input
                  type="time"
                  placeholder="From"
                  className="time"
                  onChange={HandleTimeIn}
                  required
                />
                <div className="input_div_places">Check In time</div>
                <h4>{timefrom || " select from"}</h4>
              </div>
              <div className="check-out search-type-input">
                <input
                  type="time"
                  className="time"
                  placeholder="From"
                  onChange={HandleTimeOut}

                  required
                />
                <div className="input_div_places">Check out time</div> 
                <h4>{timefromOut || "select Too "}</h4>
              </div>
              <div className="check-price search-type-input">
                <input
                  type="date"
                  className="time"
                  placeholder="From"
                  value={date}
                  onChange={HandleDate}
                  required
                />
                <div className="input_div_places">Book your date</div>
                <h4>Date : {date || "select Your Date"}</h4>
              </div>
            </div>
            {/* <div>
            
              <Button onClick={AddTimeDate}>Search Places</Button>
            </div> */}
          </div>
          <div>
            <Button variant="contained" onClick={AddTimeDate}>
              Search
            </Button>
          </div>
          {/*  */}

          <div className="place_list">
        
            <Grid
            //  container spacing={4} sx={{ flexGrow: 1 }}

            container spacing={4} sx={{ flexGrow: 1 }}
             >
              {filteredPlaces.map((place, index) => (
                <PlaceCard
                  key={index}
                  //   id={item.id}
                  image={place.img_url}
                  //   rating={data.rate}
                  price={place.price}
                  area={place.area}
                  place_name={place.place_name}
                />
              ))}
            </Grid>
           

          </div>
          {/*  */}
          {/* poster */}
          <div className="places_poster_box">
            <div className="flex-width-poster">
              <div className="places_poster_box_img ">
                <img src={Place6} alt="place" />
              </div>
              <div className="place-poster-text">
                <h4>{Poster_Text}</h4>
              </div>
              <div className="place-poster-button">
                <Button variant="outlined">Book Now</Button>
              </div>
              <div className="place-poster-logo">
                <i className="o">f</i>un-<i className="s">S</i>pace
              </div>
            </div>
          </div>
          {/* places */}
          <div className="all_palces">
            <div className="party_places">
              <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                {data.map((item) => (
                  <PlaceCard
                    //   id={item.id}
                    image={item.image}
                    //   rating={data.rate}
                    price={item.price}
                    area={item.area}
                    place_name={item.place_name}
                  />
                ))}
              </Grid>
            </div>
            {/* adv */}
            <div className="places_poster_box">
              <div className="flex-width-poster">
                <div className="place-poster-logo">
                  <i className="o">O</i>n-<i className="s">S</i>pace
                </div>
                <div className="place-poster-text">
                  <h4>{Poster_Text}</h4>
                </div>

                <div className="place-poster-button">
                  <Button variant="outlined">Book Now</Button>
                </div>

                <div className="places_poster_box_img ">
                  <img src={Open_place4} alt="place" />
                </div>
              </div>
            </div>
            {/* open */}
            <div className="open_garden_places">
              <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                {data.map((item) => (
                  <PlaceCard
                    //   id={item.id}
                    image={item.image}
                    //   rating={data.rate}
                    price={item.price}
                    area={item.area}
                    place_name={item.place_name}
                  />
                ))}
              </Grid>
            </div>
            {/* adv */}
            <div className="places_poster_box">
              <div className="flex-width-poster">
                <div className="places_poster_box_img ">
                  <img src={Meeting_place5} alt="place" />
                </div>
                <div className="place-poster-text">
                  <h4>{Poster_Text}</h4>
                </div>
                <div className="place-poster-button">
                  <Button variant="outlined">Book Now</Button>
                </div>
                <div className="place-poster-logo">
                  <i className="o">O</i>n-<i className="s">S</i>pace
                </div>
              </div>
            </div>
            {/* meeting */}
            <div className="meeting_places">
              <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                {data.map((item) => (
                  <PlaceCard
                    //   id={item.id}
                    image={item.image}
                    //   rating={data.rate}
                    price={item.price}
                    area={item.area}
                    place_name={item.place_name}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
