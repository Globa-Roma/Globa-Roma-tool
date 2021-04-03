import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      
         <div className="navbar-start">
            <NavLink className="navbar-item"  to="/option"></NavLink>
            <NavLink className="navbar-item"  to="/register"></NavLink>
            <NavLink className="navbar-item"  to="/clients"></NavLink>
          </div>
    </nav>
  );
};

export default Navbar;