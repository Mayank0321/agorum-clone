import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon.svg";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <nav className="p-3 sticky top-1 mb-2 z-10">
      <div className="flex justify-start">
        <a
          className="bg-white cursor-pointer shadow-custom w-21 rounded-3xl text-center transition-all duration-500 ease-in-out hover:scale-105"
          href="/"
        >
          <img className="px-2.5 py-1 h-7" src={logo} alt="logo" />
        </a>
        <div className="relative ml-3 w-full">
          <input
            className="absolute focus:outline-none pb-1 pt-1 pl-3 w-11/12 shadow-custom rounded-full text-sm"
            type="text"
            placeholder="Search for creatives..."
          />
          <img
            className="absolute inset-y-0 right-32 w-4 top-1.5 cursor-pointer"
            src={searchIcon}
            alt="searchIcon"
          />
        </div>
      </div>

      {/* Add navigation items here */}
    </nav>
  );
};

export default NavBar;
