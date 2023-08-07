import React from "react";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

const Card = ({ text, image, text_head ,link}) => {
  return (
    <div className="courses-container-wrapper">
      <div className="courses-main-wrapper">
        {/* body heading */}
        {/* <div className="services-header">
          <h2>{header}</h2>
        </div> */}
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid xs={11}>
            <div className="courses-detail-box gap">
              <div className="main_container">
                <div className="intro-logo-box">
                  <div className="logo-box">
                  {/* <Link to={link} className="ing_url"></Link>   */}
                  <img src={image} />
                  </div>
                </div>
                <div className="contained">
                  <div className="service-deatil-box-heading">{text_head}</div>
                  <div className="text-comp">{text}</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Card;
