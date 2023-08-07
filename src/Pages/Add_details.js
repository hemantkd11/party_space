// import React, { useState } from "react";
// import { useStateValue } from "../Context/UseContex";
// import Place6 from "../Images/place6.jpg"
// import { Button } from "@mui/material";
// const Poster_Text =
//   "Enjoy your quality time with love once, friends and family with On-Space.";

// const Add_details = () => {
//   const [{ basket, bookinginfo }, dispatch] = useStateValue();
//   const [bookingName, setBookingName] = useState("");
//   const [bookingContact, setBookingContact] = useState("");
//   const HandleName = (e) => {
//     setBookingName(e.target.value);
//   };
//   const HandleContact = (e) => {
//     setBookingContact(e.target.value);
//   };
//   // console.log("basket",basket)
//   const Add_to_CheckOutPage = (e) => {
//     // e.preventDefault()
//     // localStorage.removeItem("items")
//     // dispatch({
//     //   type: "BookingContact",
//     //   items: {
//     //     bookingName,
//     //     bookingContact,
//     //   },
//     // });
//     e.preventDefault();
//     const bookingData = {
//       bookingName,
//       bookingContact,
//     };

//     // Remove the "items" from local storage before adding new data
//     localStorage.removeItem("bookinginfo");

//     // Dispatch the booking data to the Redux store
//     dispatch({
//       type: "BookingContact",
//       items: bookingData,
//     });
//   };

//   const Confirm_playment = (e)=>{
//     e.preventDefault();
//     const Confirmplace = {
//           img_url :"item.image",
//           place_name : "item.place_name",
//           area :" item.area",
//           price:"item.price",
//           bookingName: "item.bookingName",
//           bookingContact : "item.bookingContact"

//       };
//       dispatch({
//         type : "AllDetails",
//         items : Confirmplace
//       })
//   }
//   return (
//     <div className="add_details_container">
//       <div className="add_details_wrapper">
//         <div className="add_details_main_box">
//           <div className="booking_details">
//             <div className="name-box-booking">
//               <label>Booking With Name<span>*</span></label>
//               <input
//                 className="booking_name booking_input"
//                 name="Booking_Name"
//                 value={bookingName}
//                 onChange={HandleName}
//                 placeholder="Enter Name"
//               />
//               <h4>Name : {bookingName || "Booking With the name ?"}</h4>
//             </div>

//             <div className="name-box-booking">
//               <label>Booking Contact No.<span>*</span></label>
//               <input
//                 className="booking_name booking_input"
//                 name="Booking_Name"
//                 value={bookingContact}
//                 onChange={HandleContact}
//                 placeholder="Enter Contact No."
//               />
//               <h4>
//                 Contact No. : {bookingContact || "Enter Phone No. for contact"}
//               </h4>
//             </div>
//           </div>
//           {/* btn */}
//           <div className="booking_Detail_btn">
//             <button onClick={Add_to_CheckOutPage}>Submit Details</button>
//           </div>
// {/* poster */}
//           <div className="places_poster_box">
//             <div className="flex-width-poster">
//               <div className="places_poster_box_img ">
//                 <img src={Place6} alt="place" />
//               </div>
//               <div className="place-poster-text">
//                 <h4>{Poster_Text}</h4>
//               </div>
//               <div className="place-poster-button">
//                 <Button variant="outlined">Book Now</Button>
//               </div>
//               <div className="place-poster-logo">
//                 <i className="o">O</i>n-<i className="s">S</i>pace
//               </div>
//             </div>
//           </div>
//           {/* booking place */}
//           <div className="Booking-place-box">
//             {basket.map((item) => (
//               <div className="booking-connfirm-box">
//                 <div className="booking_place_img">
//                   <img src={item.image} />
//                 </div>
//                 <div className="about-place-details">
//                   <h2>{item.place_name}</h2>
//                   <p>
//                     <strong>Location : </strong>
//                     {item.area}
//                   </p>
//                   <p> ₹ {item.price} </p>
//                 </div>
//               </div>
//             ))}
//             {bookinginfo?.map((item) => (
//               <div className="booking-details">
//                 <div className="Booking-details"> Booking details</div>
//                 <div className="display_booking_details">
//                   <div className="input-book">
//                    <strong> Booking From : </strong> {item.bookingName}
//                   </div>
//                   <div className="input-book">

//                   <strong> Booking No. :</strong> {item.bookingContact}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <button>Make Payment</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add_details;

import React, { useState } from "react";
import { useStateValue } from "../Context/UseContex";
import Place6 from "../Images/place6.jpg";
import { Button } from "@mui/material";
import Add_Details_Component from "../Components/Add_Details_Component";

const Poster_Text =
  "Enjoy your quality time with love once, friends and family with On-Space.";

const Add_details = () => {
  const [{ basket, bookinginfo, AboutTime }, dispatch] = useStateValue();
  const [bookingName, setBookingName] = useState("");
  const [bookingContact, setBookingContact] = useState("");
  const HandleName = (e) => {
    setBookingName(e.target.value);
  };
  const HandleContact = (e) => {
    setBookingContact(e.target.value);
  };
  // console.log("basket",basket)
  const Add_to_CheckOutPage = (e) => {
    e.preventDefault();
    const bookingData = {
      bookingName,
      bookingContact,
    };
    // localStorage.removeItem(bookingData);
    dispatch({
      type: "BookingContact",
      items: bookingData,
    });
  };

  return (
    <div className="add_details_container">
      <div className="add_details_wrapper">
        <div className="add_details_main_box">
          <div className="booking_details">
            <div className="name-box-booking">
              <label>
                Booking With Name<span>*</span>
              </label>
              <input
                className="booking_name booking_input"
                name="Booking_Name"
                value={bookingName}
                onChange={HandleName}
                placeholder="Enter Name"
                required
              />
              <h4>Name : {bookingName || "Booking With the name ?"}</h4>
            </div>

            <div className="name-box-booking">
              <label>
                Booking Contact No.<span>*</span>
              </label>
              <input
                className="booking_name booking_input"
                name="Booking_Name"
                value={bookingContact}
                onChange={HandleContact}
                placeholder="Enter Contact No."
                required
              />
              <h4>
                Contact No. : {bookingContact || "Enter Phone No. for contact"}
              </h4>
            </div>
          </div>
          {/* btn */}
          <div className="booking_Detail_btn">
            <button onClick={Add_to_CheckOutPage}>Submit Details</button>
          </div>
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
                <i className="o">O</i>n-<i className="s">S</i>pace
              </div>
            </div>
          </div>

          {basket?.map((items) =>
            bookinginfo?.map((data) =>
              AboutTime?.map((item) => (
                <Add_Details_Component
                  img_url={items.image}
                  place_name={items.place_name}
                  area={items.area}
                  price={items.price}
                  bookingContact={data.bookingContact}
                  bookingName={data.bookingName}
                  Waqt={item.date}
                  From={item.timefrom}
                  To={item.timefromOut}
                />
              ))
            )
          )}

          {/* booking place */}
          {/* <div className="Booking-place-box">
            {basket.map((item) => (
              <div className="booking-connfirm-box">
                <div className="booking_place_img">
                  <img src={item.image} />
                </div>
                <div className="about-place-details">
                  <h2>{item.place_name}</h2>
                  <p>
                    <strong>Location : </strong>
                    {item.area}
                  </p>
                  <p> ₹ {item.price} </p>
                </div>
              </div>
            ))}
            {bookinginfo?.map((item) => (
              <div className="booking-details">
                <div className="Booking-details"> Booking details</div>
                <div className="display_booking_details">
                  <div className="input-book">
                   <strong> Booking From : </strong> {item.bookingName}
                  </div>
                  <div className="input-book">
                  
                  <strong> Booking No. :</strong> {item.bookingContact}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={Confirm_playment}>Make Payment</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Add_details;
