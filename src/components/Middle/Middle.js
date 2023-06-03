import React from "react";
import "./Middle.css";
import MiddleBg from "../../assets/Middle.png";
import Ship from "../../assets/ship.png";
import icon1 from "../../assets/icons_1.png";
import icon2 from "../../assets/icons_2.png";
import icon3 from "../../assets/icons_3.png";
import icon4 from "../../assets/icons_4.png";
function Middle() {
  return (
    <div>
      <div className="main">
        <div className="logoBg">
          <img className="MiddleBg" src={MiddleBg} alt="logo" />
        </div>
        <div className="ship">
          <img src={Ship} alt="ship" />
        </div>
        <div className="feature">
          <div className="container text-center">
            <div className="row mt-5 mb-5">
              <div className="col">
                <img src={icon1} alt="icon1" />
                <div className="title">
                Luxury Fleet
                </div>
                <div className="summary">
                Pick between 3 types of Yacht to perfectly fit your requirements for catering, sunsets, entertaining of all of the above.
                </div>
              </div>
              <div className="col">
                <img src={icon4} alt="icon4" />
                <div className="title">
                Professional Staff
                </div>
                <div className="summary">
                We are here to fore fill your requirements where ever possible. If you dont ask, you will never know.
                </div>
              </div>
              <div className="col">
                <img src={icon2} alt="icon2" />
                <div className="title">
                Arabian Sea Is Your Oyster
                </div>
                <div className="summary">
                You pick the destinations, we will navigate the perfect route on your behalf, and sail the seven emirates with a breeze.
                </div>
              </div>
              <div className="col">
                <img src={icon3} alt="icon3" />
                <div className="title">
                Watersport Wonderland
                </div>
                <div className="summary">
                Jetskis, paddleboards, hydrafoils and scuba diving galore. We really have catered for everything your heart could ever desire.
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
