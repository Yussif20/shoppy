import { Link } from "react-router-dom";
import SearchIcon from "../../assets/magnifying-glass.svg";
import CartIcon from "../../assets/cart-outline.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-gray-400 ">
      <div className="container mx-auto px-6">
        <div className="flex justify-between item-center py-4">
          <div className="text-xl text-white font-bold">
            <Link className="" to="/">
              Shoppy
            </Link>
          </div>
          <div
            className={`lg:flex items-center ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="lg:flex space-x-4">
              <li>
                <Link
                  to="/Products"
                  className="text-red-500 hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Categories"
                  className="text-red-500 hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-red-500 hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/Account"
                  className="text-red-500 hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
