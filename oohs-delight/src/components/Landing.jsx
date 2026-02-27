import React from "react";
import "./landing.css";

const foodOptions = ["Jollof Rice", "Fried Rice", "Soups", "Meat"];

function Landing() {
  return (
    <>
      <header>
        <button>c</button>
        <h1>Logo</h1>
        <button>c</button>
      </header>
      <main>
        <div className="main-content">
          <h2>Welcome to Ooohs Delight!</h2>
          <p>We offer a variety of catering options </p>
          <button>Contact Us</button>
        </div>
      </main>
      <div className="selector">
        <button>Food</button>
        <button>Bulk</button>
        <button>Booking</button>
      </div>
      <div className="food-section">
        {foodOptions.map((food) => (
          <button key={food}>
            <div className="img"></div>
            {food}
          </button>
        ))}
      </div>
    </>
  );
}

export default Landing;
