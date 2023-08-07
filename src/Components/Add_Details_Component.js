import React from "react";
import { useStateValue } from "../Context/UseContex";
import { useNavigate } from "react-router-dom";
// import { rootShouldForwardProp } from "@mui/material/styles/styled";

const Add_Details_Component = ({
  img_url,
  place_name,
  area,
  price,
  bookingName,
  bookingContact,
  From,
  To,
  Waqt,
}) => {
  const [{ basket, bookinginfo }, dispatch] = useStateValue("");
  const Navigate = useNavigate();

  const Confirm_playment = (e) => {
    e.preventDefault();
    const Confirmplace = {
      img_url,
      place_name,
      area,
      price,
      bookingName,
      bookingContact,
      From,
      To,
      Waqt,
    };
    localStorage.clear();
    dispatch({
      type: "AllDetails",
      items: Confirmplace,
    });

    Navigate("/Payment");
  };
  return (
    <>
      <div className="Booking-place-box">
        <div className="booking-connfirm-box">
          <div className="booking_place_img">
            <img src={img_url} />
          </div>
          <div className="about-place-details">
            <h2>{place_name}</h2>
            <p>
              <strong>Location : </strong>
              {area}
            </p>
            <p> ₹ {price} </p>
          </div>
        </div>

        <div className="booking-details">
          <div className="Booking-details"> Booking details</div>
          <div className="display_booking_details">
            <div className="input-book">
              <strong> Booking From : </strong> {bookingName}
            </div>
            <div className="input-book">
              <strong> Booking No. :</strong> {bookingContact}
            </div>
          </div>
          <div>
            <div className="input-book">
              <strong> Booking Date : </strong> {Waqt}
            </div>
            <div className="input-book">
              <strong> Booking From : </strong> {From}
            </div>
            <div className="input-book">
              <strong> Booking Till :</strong> {To}
            </div>
          </div>
          <div className="add_details_btn">
            <button onClick={Confirm_playment}>Make Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Details_Component;
