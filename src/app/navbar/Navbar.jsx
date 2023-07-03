import React from "react";
import Link from 'next/link';
import 'bulma/css/bulma.min.css';
import UserProfile from "./AuthPopup";


const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-size-5 has-text-white" href="/">
            Home
          </Link>
          <Link className="navbar-item is-size-5 has-text-white" href="/about">
            About
          </Link>
          <Link className="navbar-item is-size-5 has-text-white" href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
