import React from "react";
import "./Header.css";
import videoPath from "../../assets/yacht1.mp4";
import logoHeader from "../../assets/logoHeader.png";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  const HandleRoute = () => {
    navigate("/Booking");
  }
  
  return (
    <div className="video-background">
      {/* Video source */}
      <video autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
      </video>

      {/* Logo */}
      <div className="logo">
        <img className="logoHeader" src={logoHeader} alt="logo" />
      </div>

      {/* Menu */}
      
        <div className="menuItems">
        <ul class="menu">
          <li>
            <a href="www.google.com">MAJESTY 44FT</a>
          </li>
          <li>
            <a href="www.google.com">MAJESTY 66FT</a>
          </li>
          <li>
            <a href="www.google.com">PLEASURE BOAT</a>
          </li>
          <li>
            <a href="www.google.com">CONTACT US</a>
          </li>
        </ul>
      </div>
    

      <div className="content">
        <div className="text-white h1">Luxury Yacht and Boat Services</div>
        <button onClick={HandleRoute} className="btn text-white border mx-5">BOOK MAJESTY 44FT</button>
        <button onClick={HandleRoute} className="btn text-white border">BOOK MAJESTY 66FT</button>
      </div>
    </div>
  );
}

export default Header;
