import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 h-16">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Footer</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Footer</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Footer</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Footer</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
