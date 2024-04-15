import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useStateValue } from "../Context/UseContex";
import { useNavigate } from "react-router-dom";

const PlaceCard = ({ image, place_name, area, price }) => {
  const Navigate = useNavigate();
  const [{ basket, AboutTime }, dispatch] = useStateValue();
  console.log("basket", basket);
  const Add_to_CheckOutPage = (e) => {
    // e.preventDefault()
    if (AboutTime.length === 0) {
      alert("please Add time and date");
    } else {
      dispatch({
        type: "Add_to_CheckOutPage",
        items: {
          image,
          place_name,
          area,
          price,
        },
      });
      Navigate("/checkout");
    }
  };
  return (
    <Grid xs={10} sm={6} md={3} padding={2} className="Grid-box">
      <div className="gird-item-img">
        <img src={image} />
        <div className="place-card-place-name">{place_name}</div>
        <div>{area}</div>
        <div className="place-card-place-name">Charges : {price}/hr</div>
        <div className="place-card-btn">
          <button onClick={Add_to_CheckOutPage} className="btn_active">
            Add to Card
          </button>
        </div>
      </div>
    </Grid>
  );
};

export default PlaceCard;
