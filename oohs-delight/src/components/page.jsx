import React, { useEffect } from "react";
import closeButton from "../assets/close-menu-icon.svg";
import Book from "./options/book";
import Food from "./options/food";
import Bulk from "./options/bulk";
import Cart from "./Cart";
import "./page.css";
function Page({ activeContent, isOpen, closePage }) {
  return (
    <div
      className={`slide-page ${isOpen ? "open" : "closed"}`}
      aria-hidden={!isOpen}
      {...(activeContent === "Cart" && isOpen
        ? { style: { overflow: "hidden" } }
        : {})}
    >
      {activeContent === "food" && <Food onClose={closePage} />}
      {activeContent === "bulk" && <Bulk onClose={closePage} />}
      {activeContent === "booking" && <Book onClose={closePage} />}
      {activeContent === "Cart" && <Cart />}
    </div>
  );
}

export default Page;
