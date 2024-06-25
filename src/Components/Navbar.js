import { Link, useNavigate } from "react-router-dom";
import React from "react";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import ShopTwoOutlinedIcon from "@mui/icons-material/ShopTwoOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import Dropdown from "./DropDown";
import { useStateValue } from "../Context/UseContex";
const navlist = [
  {
    icon: <AccountCircleRoundedIcon />,
    List: "User Profile",
    A: "/",
  },
  {
    icon: <ViewListIcon />,
    List: "My Booking",
    A: "/mybooking",
  },
  {
    icon: <LocalMallIcon />,
    List: "Saved Places",
    A: "/checkout",
  },
  {
    icon: <DoorbellIcon />,
    List: "Add Space",
    A: "/host",
  },
  { icon: <ExitToAppRoundedIcon />, List: "LogOut", A: "/" },
];

const Navbar = () => {
  const Navigate = useNavigate();

  const [{ basket }] = useStateValue();
  const HandleNavigate = () => {
    if (basket.length === 0) {
      alert("there is nothing in the basket");
      Navigate("/onspalce/places");
    } else {
      Navigate("/checkout");
    }
  };
  return (
    <div className="Nabvar-container">
      <div className="navbar-wrapper">
        <div className="logo-nav" onClick={() => Navigate("/")}>
          <span className="span-onspace">
            <i>O</i>n{/* <i>F</i>un */}
          </span>
          -<i>S</i>pace
        </div>
        <div className="navbar-menu-box">
          <ul className="nav-menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/checkout">About Us</Link>
            </li> */}
            <li>
              <Link to="/onspalce/places">Places</Link>
            </li>
            {/* <li className="Li-Dropdon">
              <Link to="/add_details">PaymentPage</Link>
            </li> */}
          </ul>
        </div>
        <div className="btn-nav-log">
          <div className="Li-Dropdon">
            <Button variant="contained">User</Button>
            <Dropdown navlist={navlist} />
          </div>
          <div className="nav-btn-log">
            <button onClick={() => Navigate("/user_login")}>
              Log <span>/</span> Register
            </button>
          </div>
          <div className="nav-cart-count" onClick={HandleNavigate}>
            <ShopTwoOutlinedIcon
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <span className="basket-count">{basket.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
