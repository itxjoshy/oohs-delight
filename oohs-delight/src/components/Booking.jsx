import React from "react";
import FoodList from "./FoodList";
function Booking() {
  return (
    <div className="cat-container">
      <h2>Booking</h2>
      <p>
        this package is designed for customers who want to book a for large
        events or gatherings .
      </p>
      <div className="select-container">
        <FoodList />
      </div>
    </div>
  );
}

export default Booking;
