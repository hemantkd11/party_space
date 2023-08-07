import React, { useState } from "react";
import "./newnav.css";
import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const Newnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="newnav-conatiner">
      <div className="newnav-wrapper">
        <div className="newnav-main-container">
          <div className="nav-logo-box">On-Space</div>
          <div className="nav-list-item">
            <ul className={isOpen ? "nav-mobile-menu" : "nav-fullscreen-menu"}
            onClick={() => setIsOpen(false)}>
            <div className="drawer_view">
            <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </div>

              
            </ul>
          </div>
          <div className="nav-btn">
            <button>Login</button>
            <button className="menu-mobile-btn"                 onClick={(e) => {
                  e.stopPropagation();
                }}>
            {isOpen ? (
              <CloseIcon onClick={() => setIsOpen(setIsOpen ? false : true)} />
            ) : (
              <MenuIcon onClick={() => setIsOpen(setIsOpen ? true : false)} />
            )}
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newnav;
