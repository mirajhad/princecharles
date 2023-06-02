import React from "react";
import boat1 from "../../assets/boat1.jpg";
import boat2 from "../../assets/boat2.jpeg";
import boat3 from "../../assets/boat3.jpg";
import boat4 from "../../assets/boat4.jpg";
import "./Body.css";
function Body() {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="border">
            <img src={boat1} alt="Card 2" />
          </div>
          <div>
            <img src={boat2} alt="Card 3" />
          </div>
        </div>
        <div className="row">
          <div>
            <img src={boat3} alt="Card 4" />
          </div>
          <div>
            <img src={boat4} alt="Card 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
