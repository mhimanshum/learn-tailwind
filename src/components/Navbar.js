import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" h-20 bg-green-700 flex justify-between items-center px-10">
        <div className="text-xl font-semibold text-white">Himanshu Maurya</div>
        <div className="hidden text-white md:flex md:items-center md:gap-5">
          <Link to="/" className="text-white font-medium hover:text-yellow-400">
            Home
          </Link>
          <Link
            to="/skills"
            className="text-white font-medium hover:text-yellow-400"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-white font-medium hover:text-yellow-400"
          >
            Project
          </Link>
          <Link
            to="/about"
            className="text-white font-medium hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="bg-red-600 px-3 py-3 font-medium rounded-lg border hover:bg-yellow-600"
          >
            Contact Me
          </Link>
        </div>
        {!isOpen && (
          <div className="md:hidden" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        )}
      </div>
      {/* (slider) */}
      {isOpen && (
        <div>
          <div
            id="container"
            className="md:hidden fixed inset-0 z-30  h-screen bg-gray-500 bg-opacity-60 w-full flex justify-end "
            // onClick={(element) => {
            //   if (element.target.id === 'container') setIsOpen(false);
            // }}
          >
            <div className="flex justify-center w-52 h-full bg-red-300 bg-opacity-50">
              <div className="w-full">
                <div
                  id="icon"
                  className="h-20 pr-10 flex justify-end items-center"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6  text-black cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                    />
                  </svg>
                </div>
                <div className="my-5 flex flex-col gap-5">
                  <Link
                    to="/"
                    className="text-white font-medium hover:text-yellow-400 text-center"
                  >
                    Home
                  </Link>
                  <Link
                    to="/skills"
                    className="text-white font-medium hover:text-yellow-400 text-center"
                  >
                    Skills
                  </Link>
                  <Link
                    to="/projects"
                    className="text-white font-medium hover:text-yellow-400 text-center"
                  >
                    Project
                  </Link>
                  <Link
                    to="/about"
                    className="text-white font-medium hover:text-yellow-400 text-center"
                  >
                    About
                  </Link>
                  <div className="flex justify-center">
                    <Link
                      to="/contact"
                      className="px-3 py-3 bg-red-600 font-medium rounded-md border hover:bg-yellow-600"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
