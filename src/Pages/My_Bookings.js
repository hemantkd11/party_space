import React from "react";
import { useStateValue } from "../Context/UseContex";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const My_Bookings = () => {
  const [{ OrderPage }, dispatch] = useStateValue();
  return (
    <div className="mybooking_container">
      <div className="my_booking-wrapper">
        <div className="my_bookink_main_wrapper">
          <div className="heading_mybooking"> My Booking</div>
          {OrderPage?.map((Items) => (
            <div className="booking_details_box">
              <div className="mybooking_img">
                <img src={Items.img_url} alt="img" />
              </div>
              <div className="details_box">
                <h3>{Items.area}</h3>
                <div>
                  <strong> Place Name : </strong>
                  {Items.place_name}
                </div>
                <div>
                  <strong> Price : ₹ </strong>
                  {Items.price}
                </div>
                <div>
                  <span>
                    <strong>Date : </strong> {Items.Waqt}{" "}
                  </span>
                </div>
                <div>
                  <span>
                    <strong>From : </strong> {Items.From}{" "}
                  </span>
                  <span className="arrow">
                    {" "}
                    <TrendingFlatIcon />{" "}
                  </span>

                  <span>
                    <strong>To : </strong> {Items.To}{" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Bookings;
