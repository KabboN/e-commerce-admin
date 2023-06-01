// pages/api/orders.js

import ordersData from '../../data/orderdata.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return the orders data as a response
    res.status(200).json(ordersData);
  } else {
    // For unsupported HTTP methods, return an error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
