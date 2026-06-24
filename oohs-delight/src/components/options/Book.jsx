import React, { useState } from "react";
import "./book.css";

const menuOptions = [
  "Smoky Party Jollof",
  "Fried Rice & Plantain",
  "Assorted Meat Stew (Obe Ata)",
  "Egusi Soup & Pounded Yam",
  "Suya Spiced Chicken",
  "Small Chops Platter",
];

function Book({ onClose }) {
  const [form, setForm] = useState({
    eventType: "",
    eventDate: "",
    guestCount: "",
    selectedDishes: [],
    dietaryNotes: "",
    contactName: "",
    contactPhone: "",
  });

  const toggleDish = (dish) => {
    setForm((prev) => ({
      ...prev,
      selectedDishes: prev.selectedDishes.includes(dish)
        ? prev.selectedDishes.filter((d) => d !== dish)
        : [...prev.selectedDishes, dish],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const message = `
*Event Booking Enquiry*
Event Type: ${form.eventType}
Event Date: ${form.eventDate}
Guest Count: ${form.guestCount}
Dishes: ${form.selectedDishes.join(", ")}
Dietary Notes: ${form.dietaryNotes}
Name: ${form.contactName}
Phone: ${form.contactPhone}
    `.trim();

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/234XXXXXXXXXX?text=${encoded}`, "_blank");
  };

  return (
    <div className="booking">
      <header className="header">
        <button className="back-btn" onClick={onClose}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1>Event Booking</h1>
        <div className="header-spacer" />
      </header>

      <div className="booking-main">
        {/* Hero image */}
        <div className="booking-hero">
          <div className="booking-hero-label">
            OOhs Delight Catering Services
          </div>
        </div>

        {/* Event Details */}
        <section className="booking-section">
          <h2>Event Details</h2>

          <div className="field">
            <label htmlFor="eventType">Event Type</label>
            <select
              id="eventType"
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select event type
              </option>
              <option value="wedding">Wedding / Traditional</option>
              <option value="corporate">Corporate Gathering</option>
              <option value="birthday">Birthday Celebration</option>
              <option value="private_dinner">Private Dinner</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="eventDate">Event Date</label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              value={form.eventDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="guestCount">Estimated Guest Count (Min 20)</label>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min="20"
              placeholder="e.g., 50"
              value={form.guestCount}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Menu Preferences */}
        <section className="booking-section">
          <h2>Menu Preferences</h2>
          <p className="section-note">
            Select your preferred dishes. We'll finalize the menu during
            consultation.
          </p>

          <div className="dish-grid">
            {menuOptions.map((dish) => (
              <label key={dish} className="dish-option">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={form.selectedDishes.includes(dish)}
                  onChange={() => toggleDish(dish)}
                />
                <span>{dish}</span>
              </label>
            ))}
          </div>

          <div className="field">
            <label htmlFor="dietaryNotes">
              Dietary Notes & Special Requests
            </label>
            <textarea
              id="dietaryNotes"
              name="dietaryNotes"
              rows="3"
              placeholder="Allergies, vegan options, or specific requests..."
              value={form.dietaryNotes}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Contact */}
        <section className="booking-section">
          <h2>Contact Information</h2>

          <div className="field">
            <label htmlFor="contactName">Full Name</label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              placeholder="Enter your full name"
              value={form.contactName}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="contactPhone">Phone Number (WhatsApp Active)</label>
            <input
              id="contactPhone"
              name="contactPhone"
              type="tel"
              placeholder="+234 XXX XXXX"
              value={form.contactPhone}
              onChange={handleChange}
            />
          </div>
        </section>
      </div>

      {/* Sticky CTA */}
      <div className="booking-footer">
        <p className="footer-note">
          We'll confirm availability and send a custom quote to your WhatsApp
          within 2 hours.
        </p>
        <button className="btn-whatsapp" onClick={handleSubmit}>
          <span className="material-symbols-outlined">chat</span>
          Send Enquiry via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Book;
