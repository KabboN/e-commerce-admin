import React from 'react';
import Link from 'next/link';
import customersData from '../../data/customerdata.json';

const CustomerListPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {customersData.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={customer.image} alt={customer.name} className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-lg font-medium mb-2">{customer.name}</h3>
            <p className="text-gray-600 mb-2">Email: {customer.email}</p>
            <p className="text-gray-600 mb-2">Address: {customer.address}</p>
            <p className="text-gray-600 mb-2">Phone: {customer.phone}</p>
            <Link href={`/admin/customers/${customer.id}`}>
              <span className="block mt-4 text-blue-600 hover:underline">View Details</span>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <div>
      <Link href="/admin/AddCustomerPage">
        <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Add Customer
        </span>
      </Link>
        </div>
    </div>
  );
};

export default CustomerListPage;
