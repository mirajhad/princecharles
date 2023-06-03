import React from "react";
import "./Footer.css";
import logoHeader from "../../assets/logoHeader.png";
function Footer() {
  return (
    <footer className="footer">
      <div class="">
        <div class="row text-white mb-5">
          <div class="col mt-5 ml-5">
            <img className="w-50" src={logoHeader} alt="logoHeader" />
          </div>
          <div class="col mt-5">
          Find Us On Instagram
          </div>
          <div class="col mt-5 mr-5">
            <div>Quicklinks</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div className="footer-content text-white">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
