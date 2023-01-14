import React, { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import "./Navbar.css";
import todoSvg from "../../svg/todo.svg";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = ({isLogin,setIsLogin}) => {
 
  useEffect(() => {
    initNavbar();
  }, [])

  // Function that initializes the navbar. It adds event listeners to the navbar icon, mobile nav and logo.
  const initNavbar = () => {
    const navbarIconDiv = document.getElementById("navbar-icon-div");

    const mobileNav = document.getElementById("mobile-nav");
    const navbarIcon = document.getElementById('navbar-icon');

    const logo = document.getElementById('_logo');

    // function that toggle the class "active-Icon" and "active-mobile-nav" on navbarIcon and mobileNav
    const toggleNav = () => {
      navbarIcon.classList.toggle("active-Icon");
      mobileNav.classList.toggle("active-mobile-nav");
    }

    navbarIconDiv.addEventListener("click", toggleNav);
    mobileNav.addEventListener("click", toggleNav);

    logo.addEventListener("click", () => {
      mobileNav.classList.remove("active-mobile-nav");
      navbarIcon.classList.remove("active-Icon");
    });

  };
  // function that set isLogin to false and remove user from local storage
  const handleLogOut = () => {
    setIsLogin(false)
    localStorage.removeItem("user");
  }


  return (
    <>
     
      <div className="header mw-100 w-100 bg-success d-flex flex-column">
        <div className="section">
          <nav
            aria-label="header-nav"
            className="d-flex justify-content-between align-items-center"
          >
            <Link to="/" id="_logo">
              <img src={todoSvg} alt="logo" className="header-logo" />
            </Link>
            <div className="desktop-nav d-none d-md-flex">
              <Link to="/" exact className={"nav-Link d-none d-md-flex"}>
                Home
              </Link>
              <Link to="/categories" className={"nav-Link d-none d-md-flex"}>
                Categories
              </Link>
              <Link to="/todo" className={"nav-Link d-none d-md-flex"}>
                New Task
              </Link>
              <Link to="/docs" className={"nav-Link d-none d-md-flex"} >
                Docs.
              </Link>
            </div>
            <div className="desktop-nav-btn d-none d-md-flex">
              {
                !isLogin ?
                  <>
                    <Link to="/login" className={"nav-btn d-none d-md-flex"}>
                      Login
                    </Link>
                    <Link to="/signup" className={"nav-btn d-none d-md-flex"}>
                      SignUp
                    </Link>
                  </>
                  :
                  <Link to="/login" className={"nav-btn d-none d-md-flex"} onClick={handleLogOut}>
                    Logout
                  </Link>
              }
            </div>

            {/* div that contains the navbar icon */}
            <div id="navbar-icon-div" className="navbar-icon-div">
              <div id="navbar-icon" className="navbar-icon"></div>
            </div>
          </nav>
        </div>
      </div>
      {/* import mobile nav component */}
      <MobileNav />
    </>
  );
};

export default Navbar;
