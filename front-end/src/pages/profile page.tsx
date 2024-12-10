// src/pages/ProfilePage.tsx
import React from "react";

const ProfilePage: React.FC = () => {
  // Example user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Hometown, Country",
  };

  const handleEditProfile = () => {
    alert("Edit profile functionality coming soon!");
    // You can navigate to an EditProfile page or open a modal here
  };

  const handleLogout = () => {
    alert("Logged out!");
    // Implement logout logic, such as clearing user session or token
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Name</h2>
            <p className="text-gray-800">{user.name}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Email</h2>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Phone</h2>
            <p className="text-gray-800">{user.phone}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Address</h2>
            <p className="text-gray-800">{user.address}</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleEditProfile}
            className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
