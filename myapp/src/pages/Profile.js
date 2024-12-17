import React from 'react';

const Profile = () => (
  <div className="flex items-center justify-center h-screen bg-gray-200">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">John Doe</h1>
      <p className="text-gray-600 mb-4">Software Developer</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Edit Profile
      </button>
    </div>
  </div>
);

export default Profile;
