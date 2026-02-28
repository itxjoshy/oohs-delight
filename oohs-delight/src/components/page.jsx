import React from "react";
import closeButton from "../assets/close-menu-icon.svg";
import SingleOrder from "./SingleOrder";
import BulkOrder from "./BulkOrder";
import Booking from "./Booking";
import "./page.css";
function Page({ activeContent, isOpen, closePage }) {
  return (
    <div className={`slide-page ${isOpen ? "open" : "closed"}`}>
      <button className="close-btn" onClick={closePage}>
        <img src={closeButton} alt="Close" />
      </button>
      {activeContent === "Food" && <SingleOrder />}
      {activeContent === "Bulk-order" && <BulkOrder />}
      {activeContent === "Booking" && <Booking />}
    </div>
  );
}

export default Page;
