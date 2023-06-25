import { Link } from "react-router-dom";
import SearchIcon from "../../assets/magnifying-glass.svg";
import CartIcon from "../../assets/cart-outline.svg";

const Header = () => {
  return (
    <header className="grid grid-cols-7 bg-gray-400 ">
      <Link className="flex items-center justify-start text-xl" to="/">
        <h1 className="font-mono">Shoppy</h1>
      </Link>
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
    </header>
  );
};

export default Header;
