import { useState } from "react";
import "./Services.css";

const TABS = ["Rides", "Garibook Business", "Garibook Club", "VMS"];

const SERVICES = [
  {
    title: "Intercity Car Rental",
    desc: "Travel between cities with comfort and confidence.",
    icon: "🚕",
    highlight: true,
  },
  {
    title: "Ride share",
    desc: "Go anywhere in the city, quickly and easily.",
    icon: "🚙",
  },
  {
    title: "Airport Rental",
    desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    icon: "✈️",
  },
  {
    title: "Hourly Rental",
    desc: "Rent a car by the hour, tailored to your needs.",
    icon: "⏱️",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("Rides");

  return (
    <section className="services section">
      <div className="container">
        <span className="services__eyebrow">Our Services</span>

        <div className="services__tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`services__tab ${activeTab === tab ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <h2 className="section-title services__title">
          Every Ride
          <br /> One Platform
        </h2>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div
              className={`services__card ${service.highlight ? "is-highlight" : ""}`}
              key={service.title}
            >
              <span className="services__icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
