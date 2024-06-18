import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCalendar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
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
      <FontAwesomeIcon
        className="bg-slate-800 mr-5 text-white p-4 rounded-full cursor-pointer"
        icon={faCalendar}
        onClick={openModal}
      />
      <div className="mr-5 bg-slate-800 rounded-full">
        <FontAwesomeIcon
          className=" text-white p-4 cursor-pointer"
          icon={faUser}
          onClick={openModal}
        />
        <FontAwesomeIcon
          className=" text-white p-4 cursor-pointer"
          icon={faMagnifyingGlass}
          onClick={openModal}
        />
      </div>
      <FontAwesomeIcon
        className="bg-slate-800 text-white p-4 rounded-full cursor-pointer"
        icon={faMessage}
        onClick={openModal}
      />
      {modal && <Modal closeModal={closeModal} />}
    </footer>
  );
};

export default Footer;
