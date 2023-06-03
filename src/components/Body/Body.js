import React from "react";
import boat1 from "../../assets/boat1.jpg";
import boat2 from "../../assets/boat2.jpeg";
import boat3 from "../../assets/boat3.jpg";
import boat4 from "../../assets/boat4.jpg";
import "./Body.css";
function Body() {
  return (
    <div>
      <div>
        <div class="row row-cols-2">
          <div class="col ml-5">
            <img className="w-50" src={boat1} alt="Card 2" />
          </div>
          <div class="col">
            <img className="w-50" src={boat2} alt="Card 3" />
            
          </div>
          <div class="col">
            {" "}
            <img  className="w-50"src={boat3} alt="Card 4" />
          </div>
          <div class="col">
            <img  className="w-50" src={boat4} alt="Card 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
