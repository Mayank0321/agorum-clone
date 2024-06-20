import React, { useState } from "react";
import Modal from "./Modal";
import calendar from "../assets/calendar.svg";
import search from "../assets/search-white-icon.svg";
import message from "../assets/message-button.svg";
import profile from "../assets/profile-icon.svg";
const Footer = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <footer className="flex justify-center bg-none items-center text-center text-black p-4 sticky bottom-0">
      <div
        onClick={openModal}
        className="bg-customGray mr-3 text-white p-4 rounded-full cursor-pointer"
      >
        <img src={calendar} alt="" />
      </div>
      <div className="flex mr-3 bg-customGray px-1 rounded-full">
        <span onClick={openModal} className="text-white p-4 cursor-pointer">
          <img src={profile} alt="" />
        </span>
        <span onClick={openModal} className=" text-white p-4 cursor-pointer">
          <img src={search} alt="" />
        </span>
      </div>
      <div
        onClick={openModal}
        className="bg-customGray text-white p-4 rounded-full cursor-pointer"
      >
        <img src={message} alt="" />
      </div>
      {modal && <Modal closeModal={closeModal} />}
    </footer>
  );
};

export default Footer;
