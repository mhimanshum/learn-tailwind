import React, { useState } from 'react';
import Popup from './components/Popup';

function About() {
  const [isModelOpen, SetIsModelOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <button
          className="px-5 py-2 rounded-xl text-white bg-red-700 hover:bg-yellow-700"
          onClick={() => SetIsModelOpen(true)}
        >
          Open
        </button>
      </div>
      {isModelOpen && (
        <Popup
          message="Are you sure"
          closePopup={() => SetIsModelOpen(false)}
        />
      )}
    </>
  );
}

export default About;
