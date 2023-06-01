import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
  

    // Redirect to the login page
    window.location.href = '/login';
  };


  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-medium"></span>
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                  <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-medium">Logout</span>
            </Link>
          </div>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9h-14v-2h14v2zm0 4h-14v-2h14v2zm0 4h-14v-2h14v2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2h-16v-2zm0 6h16v2h-16v-2zm0 6h16v2h-16v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
                  <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-medium">Logout</span>
            </Link>
          </div>
              </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
