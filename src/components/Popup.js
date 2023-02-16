import React from 'react';

function Popup({ message, closePopup }) {
  return (
    <div className="fixed inset-0 h-screen flex justify-center items-center">
      <div className="bg-green-300 w-64 py-10 px-5 rounded-sm bg-opacity-75">
        <p className="text-center text-lg">{message}</p>
        <div className="flex justify-center gap-5 mt-5">
          <button
            className=" transition ease-in-out duration-300 px-5 py-2 rounded-xl text-white bg-green-700 border hover:bg-green-900"
            onClick={() => closePopup()}
          >
            Confirm
          </button>
          <button
            className="transition ease-in-out duration-300 px-5 py-2 rounded-xl text-white bg-red-700 border hover:bg-red-900"
            onClick={() => closePopup()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
