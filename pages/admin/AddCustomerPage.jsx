import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import customerData from '../../data/customerdata.json';

const AddCustomerPage = () => {
  const [customer, setCustomer] = useState({
    id: uuid(),
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    customerData.push(customer);
    router.push('/admin/CustomerListPage');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add Customer</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={customer.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={customer.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerPage;
