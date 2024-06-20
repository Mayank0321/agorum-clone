import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const Modal = ({ closeModal }) => {
  const [about, setAbout] = useState(false);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDom.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-20">
      {about ? (
        <div className="flex-col bg-white rounded-xl p-8 w-96">
          <h2 className="text-2xl font-bold text-center mb-4">About Agorum</h2>
          <p>
            We're a couple of friends from Penn, Harvard,Yale, NYU, and Berkeley
            who started Agorum because it was frustratingly hard to find
            graduation photographers.
          </p>
          <br></br>
          <p>
            Our goal is to make it safer and easier for both the client and the
            freelancer, so that everyone has more time to focus on their
            passion.
          </p>
          <br></br>
          <p>
            Feel free to shoot us an email if you have any questions or require
            support!
          </p>
          <br></br>
          <p>support@agorum.co</p>
          <br></br>
          <p>P.S. we're featured on Business Insider!</p>
          <button
            onClick={() => {
              setAbout(false);
            }}
            className="w-44 mt-5 ml-16 hover:bg-orange-500 bg-black text-white py-2 rounded-3xl"
          >
            Back
          </button>
        </div>
      ) : (
        <div className="relative bg-white rounded-xl p-8 h-64 w-96">
          <button
            className="absolute top-2 right-5 text-gray-500 hover:text-gray-700"
            onClick={() => closeModal()}
          >
            X
          </button>
          <h2 className="text-2xl font-bold text-center mb-4">
            register or login
          </h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="+1"
              className="w-full border rounded-3xl py-1 px-3 text-lg"
              title="Please match the requested format"
              value={"+" + 1}
            />
          </div>
          <div className="text-center font-sans text-sm items-center mb-4">
            <p
              onClick={() => {
                setAbout(true);
              }}
              className="cursor-pointer block mb-2"
            >
              What is Agorum?
            </p>
            <div className="flex items-center justify-center">
              <a href="#" className="block">
                Privacy Policy
              </a>
              &nbsp;
              <p>&</p>&nbsp;
              <a href="#" className="block">
                Terms of Service
              </a>
            </div>
            <button className="w-44 mt-3 hover:bg-orange-500 bg-black text-white py-2 rounded-3xl">
              Send Code
            </button>
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
