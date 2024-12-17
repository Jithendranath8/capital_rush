import React from 'react';

const Dashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Stats Overview</h2>
        <p className="text-gray-700">View your progress and key insights.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
        <p className="text-gray-700">Manage and track your to-do items.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Messages</h2>
        <p className="text-gray-700">Stay updated with notifications.</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
