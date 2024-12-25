import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <a href="/" className="text-lg font-bold text-blue-600">Brand</a>
      <ul className="flex space-x-4">
        <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-blue-600">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;