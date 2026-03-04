import React, { useEffect } from "react";
import closeButton from "../assets/close-menu-icon.svg";
import SingleOrder from "./SingleOrder";
import BulkOrder from "./BulkOrder";
import Booking from "./Booking";
import Cart from "./Cart";
import "./page.css";
function Page({ activeContent, isOpen, closePage }) {
  return (
    <div
      className={`slide-page ${isOpen ? "open" : "closed"}`}
      style={{
        overflow: activeContent === "Cart" && isOpen ? "hidden" : "auto",
      }}
    >
      <button className="close-btn" onClick={closePage}>
        <img src={closeButton} alt="Close" />
      </button>
      {activeContent === "Food" && <SingleOrder />}
      {activeContent === "Bulk-order" && <BulkOrder />}
      {activeContent === "Booking" && <Booking />}
      {activeContent === "Cart" && <Cart />}
    </div>
  );
}

export default Page;
