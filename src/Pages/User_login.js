import React from "react";
import Login_Commponent from "../Components/LoginComponents";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const User_login = () => {
  const Navigate = useNavigate();
  return (
    <div className="Login_container">
      <div className="Host_btn">
        <Button
          sx={{ background: "yellowgreen" }}
          variant="contained"
          onClick={() => Navigate("/place_owner_login")}
        >
          Become Host
        </Button>
        <Button
          sx={{ background: "yellowgreen" }}
          variant="contained"
          onClick={() => Navigate("/onspace/user_register")}
        >
          Create Account
        </Button>
      </div>
      <Login_Commponent
        Logo="On-Space"
        Heading="Login As User"
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

export default User_login;
