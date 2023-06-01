import React from 'react';
import Link from 'next/link';
import UsersData from '../../data/userdata.json';

const UserListPage = () => {
  const users = UsersData; // Update the assignment to use the correct data

  if (!users || users.length === 0) {
    return <p>No users found.</p>; // Add a check for empty or undefined data
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={user.image} alt={user.name} className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-lg font-medium mb-2">{user.name}</h3>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
            <Link href={`/admin/users/${user.id}`}>
              <span className="block mt-4 text-blue-600 hover:underline">View Details</span>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <div>
        <Link href="/admin/AddUserPage">
          <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add User
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UserListPage;
