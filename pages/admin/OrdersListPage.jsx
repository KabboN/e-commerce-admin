import React from 'react';
import Link from 'next/link';
import productsData from '../../data/productsdata.json';
import customersData from '../../data/customerdata.json';
import ordersData from '../../data/orderdata.json';

const OrderListPage = () => {
  const orders = ordersData;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {orders.map((order) => {
          const product = productsData.find((product) => product.id === order.productId);
          const customer = customersData.find((customer) => customer.id === order.customerId);

          console.log('Order:', order);
          console.log('Product:', product);
          console.log('Customer:', customer);

          return (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-medium mb-2">Order ID: {order.id}</h3>
              {product && <p className="text-gray-600 mb-2">Product: {product.name}</p>}
              {customer && <p className="text-gray-600 mb-2">Customer: {customer.name}</p>}
              <p className="text-gray-600 mb-2">Total: ${order.total.toFixed(2)}</p>
              <Link href={`/admin/orders/${order.id}`}>
                <span className="block mt-4 text-blue-600 hover:underline">View Details</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderListPage;
