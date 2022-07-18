import "../App.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.cart);

  return (
    <Fragment>
      <div className="navContainer">
        <h4>Shopping Cart</h4>
        <div>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/cart" className="navLink">
            Cart
          </Link>
          <span>Cart Items: {data.length}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
