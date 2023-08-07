import React from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-items">Logo</div>
        <div className="nav-items">
          {" "}
          <ul className="nav-items ">
            <li className="list"> Home </li>
            <li className="list"> Aboutus </li>
            <li className="list"> Gallery </li>
            <li className="list donate-button"> Donate </li>
            <li className="icon">
              {" "}
              <MenuIcon sx={{ fontSize: 30 }} />{" "}
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Nav;
