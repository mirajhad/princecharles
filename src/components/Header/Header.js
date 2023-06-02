import React from "react";
import "./Header.css";
import videoPath from "../../assets/yacht1.mp4";
function Header() {
  return (
    <div className="main">
      <video  src={videoPath} autoPlay loop muted/>
        
      <div className="content">
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

      <div className="servicesTags">
        <div className="servicesText">Luxury Yacht and Boat Services</div>
        <div className="servicesBtn">
          <div className="majesty44">
            <button>MAJESTY 44FT</button>
          </div>
          <div className="majesty66">
            <button>MAJESTY 66FT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
