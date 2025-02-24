import React, { useState } from "react";
import "../App.css";

const VehicleBookingForm = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>BIT TRANSPORT</h2>
        <ul>
          <li>🚗 Book Vehicle</li>
          <li>📄 View Request</li>
          <li>✅ Confirm Request</li>
          <li>🚖 For Driver </li>
          <li>🔍 For Admin </li>
          <ul>
            <li>📌 Vehicle Detail</li>
            <li>📝 Booking Review</li>
          </ul>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="profile">
            <span className="notification">🔔</span>
            <div className="user-info">
              <span className="avatar">AD</span>
              <span>Admin </span>
            </div>
          </div>
        </div>

        <div className="form-container">
        <h2>Vehicle Booking Form</h2>
        <br />
          <div className="form-group">
            <label>Name</label>
            <input type="text" />

            <label>ID</label>
            <input type="text"  />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input type="text"  readOnly />

            <label>Designation</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Traveller Email</label>
            <input type="email" />

            <label>Mobile No</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Pick up Address</label>
            <input type="text" />

            <label>Drop Address</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" />

            <label>HH</label>
            <input type="number" placeholder="HH" />

            <label>MM</label>
            <input type="number" placeholder="MM" />

            <label>Total Passengers</label>
            <input type="number" />
          </div>

          <div className="buttons">
            <button className="cancel">Cancel</button>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBookingForm;
