import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/showcase'); // Navigate to Showcase page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-xl mb-6">Discover something amazing today!</p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
