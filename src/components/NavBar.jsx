import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <nav className="bg-none text-white p-4 sticky top-0 z-10">
      <div className="flex justify-start">
        <a href="/">
          <img
            className="bg-white cursor-pointer shadow-sm hover:shadow-md w-20 rounded-3xl font-bold font-press-start text-md shadow-black hover:shadow-slate-700 text-center transition ease-in-out hover:scale-110 px-2 py-1 border border-gray-300 delay-150 h-10"
            src="https://app.agorum.co/agorum-logo.svg"
            alt="logo"
          />
        </a>

        <div className="flex w-full items-center justify-center">
          <div className="relative w-full pl-5">
            <input
              type="text"
              placeholder="Search for creatives..."
              className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-0 shadow-md"
            />
            <div className="absolute top-0 right-0 mt-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.293 4.293-1.414 1.414-4.293-4.293zm-6.4-1.32a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Add navigation items here */}
    </nav>
  );
};

export default NavBar;
