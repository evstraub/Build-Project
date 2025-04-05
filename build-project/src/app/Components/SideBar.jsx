import React from 'react';

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li className="py-2"><a href="#home">Home</a></li>
        <li className="py-2"><a href="#services">Services</a></li>
        <li className="py-2"><a href="#about">About</a></li>
        <li className="py-2"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
