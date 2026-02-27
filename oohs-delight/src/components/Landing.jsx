import React from "react";
import BannerImg from "../assets/banner-img.png";
import jollofImg from "../assets/card-images/c-i-1.png";
import friedImg from "../assets/card-images/c-i-2.png";
import meatImg from "../assets/card-images/c-i-3.png";
import soupImg from "../assets/card-images/c-i-4.png";
import "./landing.css";

const steps = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    gradient: "orange",
    title: "Browse Menu",
    description: "Explore hundreds of dishes from local restaurants near you.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    gradient: "orange",
    title: "Place Your Order",
    description: "Add your favourites to the cart and checkout in seconds.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    gradient: "orange",
    title: "Fast Delivery",
    description:
      "Track your order in real time and get it delivered hot to your door.",
  },
];

const foodOptions = [
  { name: "Jollof Rice", price: 10, img: jollofImg },
  { name: "Fried Rice", price: 12, img: friedImg },
  { name: "Soups", price: 8, img: soupImg },
  { name: "Meat", price: 15, img: meatImg },
];

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
          <p> Variety of catering options </p>
          <button>Contact Us</button>
          <img src={BannerImg} alt="Banner" />
        </div>
      </main>
      <div className="selector">
        <button>Food</button>
        <button>Bulk</button>
        <button>Booking</button>
      </div>
      <div className="food-section">
        <h2>Food Selections</h2>
        <div className="food-selection-grid">
          {foodOptions.map((food) => (
            <button key={food.name}>
              <div className="img">
                <img src={food.img} alt={food.name} />
              </div>
              <p>{food.name}</p>
              <p>N{food.price}</p>
            </button>
          ))}
        </div>
      </div>
      <section className="hiw-section">
        <h2 className="hiw-heading">How it works?</h2>

        <div className="hiw-steps">
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div className="hiw-step">
                <div className="hiw-icon" style={{ background: step.gradient }}>
                  {step.icon}
                </div>
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-description">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hiw-connector">
                  <div className="hiw-connector-line">
                    <span className="hiw-dot" />
                    <span className="hiw-dot" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
