import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-xl">
            <Link to="/">Shoppy</Link>
          </div>

          <div
            className={`lg:flex items-center ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="lg:flex space-x-4">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${isMenuOpen ? "hidden" : "block"}`}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isMenuOpen ? "block" : "hidden"}`}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
