import { useState, useEffect } from "react";
import { Link } from 'react-router';
import useOnlineStatus from "../../utils/useOnlineStatue";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  useEffect(() => {
    return () => {
      // Cleanup code if needed
    };
  }, []);
  return (
    <>
    <div className="header">
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
          <li onClick={() => setBtnName("Logout")}>
            <Link to="/login">{btnName}</Link>
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
