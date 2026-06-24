import React from "react";
import { useState, useEffect } from "react";
import Page from "./page";
import Nav from "./Nav";
import menuIcon from "../assets/menu-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import BannerImg from "../assets/banner-img.png";
import food from "../assets/card-images/c-i-1.png";
import bulk from "../assets/card-images/c-i-2.png";
import bookings from "../assets/card-images/c-i-3.png";
import soupImg from "../assets/card-images/c-i-4.png";

import "./landing.css";

const orderChoices = [
  {
    id: "food",
    image: food,
    icon: "restaurant",
    title: "food",
    subTitle: "Individual meals from our full menu",
    label: " Requires min. 5 portions ",
  },
  {
    id: "bulk",
    image: bulk,
    icon: "inventory_2",
    title: "bulk order",
    subTitle: "Individual meals from our full menu",
    label: " Requires min. 10 portions per item",
  },
  {
    id: "booking",
    image: bookings,
    icon: "celebration",
    title: "bookings",
    subTitle: "Individual meals from our full menu",
    label: " Requires min. 10 portions per item",
  },
];
function Landing() {
  const [activeContent, setActiveContent] = useState(null); // null = no page open
  const [isOpen, setIsOpen] = useState(false);
  const openPage = (contentId) => {
    setActiveContent(contentId);
  };

  // When activeContent changes, trigger slide-in
  useEffect(() => {
    if (activeContent) {
      // timeout ensures CSS transition happens
      const timer = setTimeout(() => setIsOpen(true), 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      setIsOpen(false);
    }
  }, [activeContent]);

  const closePage = () => {
    setIsOpen(false);
    // wait for animation to finish before unmounting
    setTimeout(() => setActiveContent(null), 500);
  };

  return (
    <>
      <header>
        <button>
          <img src={menuIcon} alt="" />
        </button>
        <h1>Logo</h1>
      </header>
      <main>
        <div className="main-content">
          <h2>Welcome to Ooohs Delight!</h2>
          <p> Variety of catering options </p>
          <button>Contact Us</button>
          <img src={BannerImg} alt="Banner" />
        </div>
      </main>
      <section className="card-section">
        {orderChoices.map((item, _i) => (
          <button
            className="card"
            key={_i}
            onClick={() => {
              openPage(item.id);
            }}
          >
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-icon">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>

            <div className="card-body">
              <div>
                <h2>{item.title}</h2>
                <p>{item.subTitle}</p>
              </div>
              <div className="card-footer">
                <span className="card-label">{item.label}</span>
                <div className="card-note"></div>
              </div>
            </div>
          </button>
        ))}
      </section>
      {activeContent !== null && (
        <Page
          activeContent={activeContent}
          isOpen={isOpen}
          closePage={closePage}
        />
      )}
      <Nav />
    </>
  );
}

export default Landing;
