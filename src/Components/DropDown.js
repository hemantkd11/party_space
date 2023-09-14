import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
const Dropdown = ({ navlist, key }) => {
  // const Navigate = useNavigate();
  return (
    <div className="Dropdown">
      <div className="btn Sign-in-dropdown">
        
        <div className="dropdown-list">
          <div className="list-gap-drop-down" >
            <div>
            <HomeIcon/>
            </div>
            <Link to={'/'} className="link-drop-menu">Home</Link>
          </div>
          <div className="list-gap-drop-down" >
            <div>
            <LoyaltyIcon/>
            </div>
            <Link to={'/onspalce/places'} className="link-drop-menu">Find Places</Link>
          </div>
          {navlist.map((item) => (
            <div className="list-gap-drop-down" key={item.A}>
              <div>{item.icon}</div>
              <Link to={item.A} className="link-drop-menu">
                {item.List}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
