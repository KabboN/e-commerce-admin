import React from 'react';
import { useRouter } from 'next/router';
import UsersData from '../../../data/userdata.json';

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the user with the matching ID
  const user = UsersData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>user not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-center">
          <img src={user.image} alt={user.name} className="w-64 h-64 object-contain" />
        </div>
        <p className="text-gray-600 mb-2">Email: {user.name}</p>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default UserDetailPage;
