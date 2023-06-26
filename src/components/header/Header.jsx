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
            <ul className="lg-flex space-x-4">
              <li>
                <Link></Link>
              </li>
            </ul>
          </div>
          <div className="header-search flex">
            <input type="text" />
            <img src={SearchIcon} />
          </div>
          <div className="header-nav flex gap-10">
            <Link to="/login">
              <div className="header-option">
                <div className="header-option_one">Hello guest</div>
                <div className="header-option_two">Sign in</div>
              </div>
            </Link>
            <Link to="/orders">
              <div className="header-option">
                <div className="header-option_one">Returns</div>
                <div className="header-option_two">& Orders</div>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="header-optionBasket">
                <img className="w-4" src={CartIcon} alt="cart-image" />
                <div className="header-option_two header-basket_count">
                  & Orders
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
