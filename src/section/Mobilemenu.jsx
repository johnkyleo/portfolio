import React from "react";
import Navbaritem from "./Navbaritem";

const Mobilemenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 right-0 py-3 flex-col border-gray-800 flex z-10 bg-opacity-50 border-t-slate-500">
      <div className="flex flex-col gap-4 items-center">
        <Navbaritem label="Home" id="home" />
        <Navbaritem label="Skills" id="skills" />
        <Navbaritem label="Projects" id="project" />
        <Navbaritem label="Contact" id="contact" />
      </div>
    </div>
  );
};

export default Mobilemenu;
