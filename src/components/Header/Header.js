import React from "react";
import "./Header.css";
import videoPath from "../../assets/yacht1.mp4";
function Header() {
  return (
    <div className="video-background">
      {/* Video source */}
      <video autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
      </video>

      {/* Logo */}
      <div className="logo">
        {/* Your logo component */}
      </div>

      {/* Menu */}
      
        <div className="menuItems">
        <ul class="menu">
          <li>
            <a href="#">MAJESTY 44FT</a>
          </li>
          <li>
            <a href="#">MAJESTY 66FT</a>
          </li>
          <li>
            <a href="#">PLEASURE BOAT</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    

      {/* Other content */}
      <div className="content">
        {/* Your other components and content */}
      </div>
    </div>
  );
}

export default Header;
