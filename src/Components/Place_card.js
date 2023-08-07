import { Box, Grid } from "@mui/material";
import React from "react";

const Place_card = ({src}) => {
  return (
    <Box className="place_card" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid xs={3} md={3}>
         
           <img src={src} alt="img_place_card"/>
            
        </Grid>
      </Grid>
    </Box>
  );
};

export default Place_card;
