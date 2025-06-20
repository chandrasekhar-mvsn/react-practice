import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router';
import useOnlineStatus from "../../utils/useOnlineStatue";
import { LOGO_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";
import {useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  // Using useSelector to access the cart items from the Redux store(Subscribe to the Redux store to get the cart items)
  const cartItems = useSelector((store) => store.cart.cartItems);
  useEffect(() => {
    return () => {
      // Cleanup code if needed
    };
  }, []);
  return (
    <>
    <div className="header sticky top-0 z-50 bg-white shadow">
      <div className="logo">
        <img src={LOGO_URL} alt="React Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/cart">
              <span style={{cursor: "pointer", fontWeight:"bold"}} className="cart">
                🛒 ({cartItems.length})
              </span>
            </Link>
          </li>
          <li>
            {/* <Link to="/login">{btnName}</Link> */}
            <button style={{cursor: "pointer"}} className="login-btn" onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
                setUserName("Chandra"); // Simulating a login
              } else {
                setBtnName("Login");
                setUserName("Guest"); // Simulating a logout
              }
            }}>{btnName}</button>
          </li>
          <li>
            <span className="user-name">
              {loggedInUser ? `${loggedInUser}` : "Guest"}
            </span>
          </li>
        </ul>
      </div>
    </div>
    {!isOnline && <div className="status">
      <div>You're offline. Please check your connection</div>
    </div>}
    </>
  );
};

export default Header;
