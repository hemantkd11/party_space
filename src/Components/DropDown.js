import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navlist, key }) => {
  // const Navigate = useNavigate();
  return (
    <div className="Dropdown">
      <div className="btn Sign-in-dropdown">
        <div className="dropdown-list">
          {navlist.map((item) => (
            <div className="list-gap-drop-down" key={item.A}>
              <div>{item.icon}</div>
              <Link to={item.A}  className="link-drop-menu">
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
