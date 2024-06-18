import React, { useEffect } from "react";
import ReactDom from "react-dom";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDom.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl p-8 max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => closeModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">
          register or login
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="+1"
            className="w-full border rounded-xl py-2 px-3 text-lg"
          />
        </div>
        <div className="text-center items-center mb-4">
          <a href="#" className="block text-gray-500 mb-2">
            What is Agorum?
          </a>
          <a href="#" className="block text-gray-500">
            Privacy Policy & Terms of Service
          </a>
          <button className="w-40 mt-7 hover:bg-orange-500 bg-black text-white py-2 rounded-3xl">
            Send Code
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
