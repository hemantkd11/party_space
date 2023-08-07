import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navlist }) => {
  // const Navigate = useNavigate();
  return (
    <div className="Dropdown">
      <div className="btn Sign-in-dropdown">
        <div className="dropdown-list">
          {navlist.map((item, index) => (
            <div className="list-gap-drop-down">
              <div>{item.icon}</div>
              <Link to={item.A} key={index} className="link-drop-menu">
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
