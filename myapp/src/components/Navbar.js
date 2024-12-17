import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Website</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
