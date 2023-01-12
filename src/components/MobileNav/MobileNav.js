import React from "react";
import { NavLink as Link } from "react-router-dom";
const MobileNav = () => {
    return (

      <nav id="mobile-nav" className="mobile-nav">
      <Link to="/" exact className={"Link"}>
        Home
      </Link>
      <Link to="/categories" className={"Link"}>
        Categories
      </Link>
      <Link to="/todo" className={"Link"}>
        New Task
      </Link>
      <Link to="/docs" className={"Link"}>
        Docs.
      </Link>
      <Link to="/login" className={"Link"}>
        Login
      </Link>
      <Link to="/signup" className={"Link"}>
        SignUp
      </Link>
      {/* <Link to="/logout" className={"Link"}>
        LogOut
      </Link> */}
    </nav>);}

export default MobileNav;
