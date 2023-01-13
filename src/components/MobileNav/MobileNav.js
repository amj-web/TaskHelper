import React from "react";
import { NavLink as Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <nav id="mobile-nav" className="mobile-nav">
      {/* Home link */}
      <Link to="/" exact className={"Link"}>
        Home
      </Link>
      {/* Categories link */}
      <Link to="/categories" className={"Link"}>
        Categories
      </Link>
      {/* New Task link */}
      <Link to="/todo" className={"Link"}>
        New Task
      </Link>
      {/* Docs link */}
      <Link to="/docs" className={"Link"}>
        Docs.
      </Link>
      {/* Login link */}
      <Link to="/login" className={"Link"}>
        Login
      </Link>
      {/* SignUp link */}
      <Link to="/signup" className={"Link"}>
        SignUp
      </Link>
    </nav>
  );
}

export default MobileNav;
