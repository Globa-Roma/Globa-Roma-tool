import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      
         <div className="navbar-start">
            <NavLink className="navbar-item"  to="/globa-aroma/option"></NavLink>
            <NavLink className="navbar-item"  to="/globa-aroma/register"></NavLink>
            <NavLink className="navbar-item"  to="/globa-aroma/clients"></NavLink>
          </div>
    </nav>
  );
};

export default Navbar;