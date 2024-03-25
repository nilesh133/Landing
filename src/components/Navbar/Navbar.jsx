import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar_main" style={{overflow: showMenu ? 'visible' : 'hidden'}}>
       <div className="navbar_vertical_menu" style={{right: showMenu ? '0%' : '-100%'}}>
        <h3>Home</h3>
        <h3>Work</h3>
        <h3>Services</h3>
        <h3>Accomplishments</h3>
        <h3>Pricing</h3>
        <h3>Testimonials</h3>
      </div>
      <div className="navbar_logo">LANDING</div>
      <div className="navbar_links_menu" onClick={() => {
        setShowMenu(!showMenu)
      }}>
        <div className={!showMenu ? `line line1`: `line line1 menu_rotate_pos`}></div>
        <div className={!showMenu ? `line line2`: `line line2 menu_hide`}></div>
        <div className={!showMenu ? `line line3`: `line line3 menu_rotate_neg`}></div>
      </div>
      <div className="navbar_links">
        <h3>Home</h3>
        <h3>Work</h3>
        <h3>Services</h3>
        <h3>Accomplishments</h3>
        <h3>Pricing</h3>
        <h3>Testimonials</h3>
      </div>
    </div>
  );
};

export default Navbar;
