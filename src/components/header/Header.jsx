import { Link } from "react-router-dom";
import Logo from "../../assets/logo-color.svg";
import SearchIcon from "../../assets/magnifying-glass.svg";
import CartIcon from "../../assets/cart-outline.svg";

const Header = () => {
  return (
    <header className="container max-h-24">
      <Link to="/">
        <img className="w-14" src={Logo} alt="logo" />
      </Link>
      <div className="header-search">
        <input type="text" />
        <img src={SearchIcon} />
      </div>
      <div className="header-nav">
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
            <img src={CartIcon} alt="cart-image" />
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
