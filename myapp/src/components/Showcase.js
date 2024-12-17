import React from 'react';
import About from './About';
import Contact from './Contact';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Showcase = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
      Components Showcase
    </h1>

    {/* About Component */}
    <div className="mb-8 border-b pb-4">
      <h2 className="text-2xl font-semibold mb-2">About Us</h2>
      <About />
    </div>

    {/* Contact Component */}
    <div className="mb-8 border-b pb-4">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <Contact />
    </div>

    {/* Dashboard Component */}
    <div className="mb-8 border-b pb-4">
      <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
      <Dashboard />
    </div>

    {/* Profile Component */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">Profile</h2>
      <Profile />
    </div>
  </div>
);

export default Showcase;
