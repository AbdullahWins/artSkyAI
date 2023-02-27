import React from "react";
import logo from "../../assets/logo/logo.png";

const Menu = () => {
  return (
    <div className="flex items-center justify-between p-4 text-xl font-bold text-center text-whiteMid bg-pureBlackColor">
      <p>Assist</p>
      <img
        className="w-12 h-12 rounded-full bordered border-2 border-white"
        src={logo}
        alt=""
      />
    </div>
  );
};

export default Menu;
