import React from 'react'
import logoHeader from '../../../assets/logoHeader.png';
function MainHeader() {
    return (
        <div>
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
        </div>
    )
}
export default MainHeader;