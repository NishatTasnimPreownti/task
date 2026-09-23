import { useState } from "react";
import "./Hero.css";

const TRIP_TYPES = ["One Way", "Round Way", "Hourly"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Car Rental");
  const [tripType, setTripType] = useState("One Way");

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>Assurance of Effortless Travel</h1>
          <p>
            Choose your city, pick your car and enjoy the journey with
            Garibook&rsquo;s best drivers.
          </p>
          <button className="btn btn-yellow hero__download">
            Download App <span>&rarr;</span>
          </button>
        </div>

        <div className="hero__card">
          <div className="hero__tabs">
            {["Car Rental", "Airport Rental"].map((tab) => (
              <button
                key={tab}
                className={`hero__tab ${activeTab === tab ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <form
            className="hero__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="hero__form-grid">
              <label className="hero__field">
                <span>
                  🚗 Choose a Car <b>*</b>
                </span>
                <select defaultValue="">
                  <option value="" disabled>
                    Select Car Type
                  </option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Microbus</option>
                  <option>Chander Gari</option>
                </select>
              </label>

              <label className="hero__field">
                <span>
                  🟡 Pickup Location <b>*</b>
                </span>
                <input type="text" placeholder="Enter Pickup Location" />
              </label>

              <label className="hero__field">
                <span>
                  📍 Drop-off Location <b>*</b>
                </span>
                <input type="text" placeholder="Enter Drop-off Location" />
              </label>

              <label className="hero__field">
                <span>
                  📅 Pickup Date &amp; Time <b>*</b>
                </span>
                <input type="text" placeholder="MM/DD/YYYY 00:00 PM" />
              </label>
            </div>

            <div className="hero__form-footer">
              <div className="hero__trip-types">
                {TRIP_TYPES.map((type) => (
                  <label key={type} className="hero__radio">
                    <input
                      type="radio"
                      name="tripType"
                      checked={tripType === type}
                      onChange={() => setTripType(type)}
                    />
                    <span className="hero__radio-dot" />
                    {type}
                  </label>
                ))}
              </div>

              <button type="submit" className="btn btn-primary hero__continue">
                Continue <span>&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
