import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-red-500 ">
      <div className="container mx-auto px-6 ">
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
            <ul className="lg:flex space-x-4 ">
              <li>
                <Link
                  to="/Products"
                  className="text-white hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/Categories"
                  className="text-white hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-white hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/Account"
                  className="text-white hover:text-red-900 hover:bg-white px-3 py-2 rounded-md"
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
            <FontAwesomeIcon
              className="h-6 w-6 bg-white text-white fa-solid"
              icon={faBars}
            />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
