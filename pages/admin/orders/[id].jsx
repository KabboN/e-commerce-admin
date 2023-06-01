import React from 'react';
import { useRouter } from 'next/router';
import ordersData from '../../../data/orderdata.json';
import productsData from '../../../data/productsdata.json';
import customersData from '../../../data/customerdata.json';

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the order with the matching ID
  const order = ordersData.find((order) => order.id === parseInt(id));

  if (!order) {
    return <p>Order not found.</p>;
  }

  const product = productsData.find((product) => product.id === order.productId);
  const customer = customersData.find((customer) => customer.id === order.customerId);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order ID: {order.id}</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-600 mb-2">Product: {product ? product.name : 'Unknown Product'}</p>
        <p className="text-gray-600 mb-2">Customer: {customer ? customer.name : 'Unknown Customer'}</p>
        <p className="text-gray-600 mb-2">Total: ${order.total.toFixed(2)}</p>
        <p className="text-gray-600 mb-2">Quantity: {order.quantity}</p>
      </div>
    </div>
  );
};

export default OrderDetailPage;
