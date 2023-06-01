import React from 'react';
import { useRouter } from 'next/router';
import customersData from '../../../data/customerdata.json';

const CustomerDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the customer with the matching ID
  const customer = customersData.find((customer) => customer.id === parseInt(id));

  if (!customer) {
    return <p>Customer not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{customer.name}</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-center">
          <img src={customer.image} alt={customer.name} className="w-64 h-64 object-contain" />
        </div>
        <p className="text-gray-600 mb-2">Email: {customer.email}</p>
        <p className="text-gray-600 mb-2">Address: {customer.address}</p>
        <p className="text-gray-600 mb-2">Phone: {customer.phone}</p>
      </div>
    </div>
  );
};

export default CustomerDetailPage;
