import React from 'react';

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h1 className="text-8xl font-bold mb-4">404</h1>
    <p className="text-2xl mb-6">Oops! Page not found.</p>
    <a
      href="/"
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
    >
      Go Back Home
    </a>
  </div>
);

export default NotFound;
