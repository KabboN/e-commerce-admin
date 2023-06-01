import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-55 md:w-20 lg:w-64">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/admin/AdminDashboard">
              <span className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/OrdersListPage">
              <span className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer font-medium">Orders</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/ProductsPage">
              <span className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer font-medium">Products</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/CustomerListPage">
              <span className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer font-medium">Customers</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/UsersListPage">
              <span className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer font-medium">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
