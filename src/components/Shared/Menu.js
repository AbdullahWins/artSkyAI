import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Menu = () => {
  return (
    <div className="flex items-center justify-between p-4 text-xl font-bold text-center text-whiteMid bg-pureBlackColor">
      <p>Assist</p>
      <Link to="https://artsky.io/">
        <img className="h-6" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Menu;
