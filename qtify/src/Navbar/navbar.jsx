import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import Button from "./Button"; 

const Navbar = () => {
  return (
    <nav className="bg-green-700 flex justify-between items-center p-4">
      
      <div className="flex items-center">
        <img src={logo} alt="QTify Logo" className="h-8 w-auto" />
        <span className="text-white text-lg font-bold ml-2">QTify</span>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search an album of your choice"
          className="p-2 pl-4 pr-12 rounded-md border border-gray-300 focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 h-full p-2">
          <img src={searchIcon} alt="Search" className="h-5 w-5" />
        </button>
      </div>

      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
