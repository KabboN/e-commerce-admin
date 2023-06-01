import React from 'react';
import Link from 'next/link';
import AdminLayout from '../../components/AdminLayout';
import productsData from '../../data/productsdata.json';
import customerData from '../../data/customerdata.json';
import orderData from '../../data/orderdata.json';

const Dashboard = () => {
  const totalCustomers = customerData.length;
  const totalOrders = orderData.length;
  const pendingOrders = orderData.filter((order) => order.status === 'pending').length;
  const deliveredOrders = orderData.filter((order) => order.status === 'delivered').length;
  const totalProducts = productsData.length;

  // Calculate total income
  const totalIncome = orderData.reduce((sum, order) => sum + order.total, 0);

  // Find most sold products
  const soldProducts = orderData.flatMap((order) => order.products || []);
  const soldProductCounts = soldProducts.reduce((counts, product) => {
    const productId = product.id || '';
    const quantity = product.quantity || 0;
    counts[productId] = (counts[productId] || 0) + quantity;
    return counts;
  }, {});
  const sortedSoldProducts = Object.entries(soldProductCounts)
    .sort(([, quantity1], [, quantity2]) => quantity2 - quantity1)
    .slice(0, 5);

  return (
    <AdminLayout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">Total Customers</h2>
            <p className="text-3xl text-indigo-500">{totalCustomers}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
            <p className="text-3xl text-purple-500">{totalOrders}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">Pending Orders</h2>
            <p className="text-3xl text-yellow-500">{pendingOrders}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">Delivered Orders</h2>
            <p className="text-3xl text-green-500">{deliveredOrders}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md col-span-2">
            <h2 className="text-lg font-semibold mb-2">Total Products</h2>
            <p className="text-3xl text-blue-500">{totalProducts}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md col-span-3">
            <h2 className="text-lg font-semibold mb-2">Total Income</h2>
            <p className="text-3xl text-yellow-500">${totalIncome.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md col-span-3">
            <h2 className="text-lg font-semibold mb-2">Pending Delivery Orders</h2>
            {orderData
              .filter((order) => order.status === 'pending')
              .map((order) => (
                <p key={order.id}>
                  <Link href={`/admin/OrderDetailsPage/${order.id}`}>
                    <span className="text-blue-500 underline">{order.id}</span>
                  </Link>
                </p>
              ))}
          </div>
          <div className="p-4 bg-white shadow-md rounded-md col-span-3">
            <h2 className="text-lg font-semibold mb-2">Delivered Orders</h2>
            {orderData
              .filter((order) => order.status === 'delivered')
              .map((order) => (
                <p key={order.id}>
                  <Link href={`/admin/OrderDetailsPage/${order.id}`}>
                    <span className="text-blue-500 underline">{order.id}</span>
                  </Link>
                </p>
              ))}
          </div>
          <div className="p-4 bg-white shadow-md rounded-md col-span-3">
            <h2 className="text-lg font-semibold mb-2">Order List</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Customer Name</th>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Total Bill</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4 border-b">{order.id}</td>
                    <td className="py-2 px-4 border-b">{order.customerName}</td>
                    {order.products && order.products.length > 0 ? (
                      <>
                        <td className="py-2 px-4 border-b">{order.products[0].name}</td>
                        <td className="py-2 px-4 border-b">{order.products[0].quantity}</td>
                      </>
                    ) : (
                      <>
                        <td className="py-2 px-4 border-b">N/A</td>
                        <td className="py-2 px-4 border-b">N/A</td>
                      </>
                    )}
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
