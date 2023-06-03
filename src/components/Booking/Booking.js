import React from "react";
import MainHeader from "../Header/MainHeader/MainHeader";
import BookingImg from "../../assets/booking.png"
function Booking() {
  return (
    <div>
      <MainHeader />
      <div>
        <h1 className="mt-5">Sail Away to Something Great</h1>
      </div>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
            <img src={BookingImg} className="w-100 mr-5" alt="booking" />
          </div>
          <div class="col">2 of 2</div>
        </div>
        
      </div>
    </div>
  );
}
export default Booking;
