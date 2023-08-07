import React from "react";
import Login_Commponent from "../Components/LoginComponents";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Place_owner_login = () => {
  const Navigate = useNavigate();
  return (
    <div className="Login_container">
      <div className="Host_btn">
        <Button
          sx={{ background: "yellowgreen" }}
          variant="contained"
          onClick={() => Navigate("/host_register")}
        >
          Don't Have Account As Host ?
        </Button>
      </div>
      <Login_Commponent
        Logo="On-Space"
        Heading="Login As Place Owner"
        Label_user="UserName *"
        Label_pass="Password *"
        value_submit="Login"
        Remember_type="checkbox"
        Remember_lebal="Remember Me"
        placeholder_user="Enter UserName"
        placeholder_password="Enter Password"
        type_pass="password"
        type_user="text"
        type_submit="submit"
      />
    </div>
  );
};

export default Place_owner_login;
