import { useState } from "react";
import {
  CarIcon,
  LuggageIcon,
  DriverIcon,
  PlaneIcon,
  ClockIcon,
} from "./icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import gbPhoto from "../assets/gb.png";
import gcPhoto from "../assets/gc.png";
import "./Services.css";

const TABS = ["Rides", "Garibook Business", "Garibook Club", "VMS"];

const SERVICES = [
  {
    title: "Intercity Car Rental",
    desc: "Travel between cities with comfort and confidence.",
    accent: LuggageIcon,
  },
  {
    title: "Ride share",
    desc: "Go anywhere in the city, quickly and easily.",
    accent: DriverIcon,
  },
  {
    title: "Airport Rental",
    desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    accent: PlaneIcon,
  },
  {
    title: "Hourly Rental",
    desc: "Rent a car by the hour, tailored to your needs.",
    accent: ClockIcon,
  },
];

const PROMOS = {
  "Garibook Business": {
    heading: "Modern Car Rentals for Business",
    desc: "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",
    photo: gbPhoto,
    photoAlt: "A businessman working on a laptop in the back seat of a car",
  },
  "Garibook Club": {
    heading: "Turn Your Car into Earnings with Garibook Club",
    desc: "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",
    photo: gcPhoto,
    photoAlt: "Two people shaking hands at a car dealership",
  },
  VMS: {
    heading: "Vehicle Management System - VMS",
    desc: "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",
    photoClass: "services__photo--vms",
  },
};

function RidesPanel() {
  const [selected, setSelected] = useState(0);
  const gridRef = useScrollReveal(".services__card");

  return (
    <>
      <h2 className="section-title services__title">
        Every Ride
        <br /> One Platform
      </h2>

      <div className="services__grid" ref={gridRef}>
        {SERVICES.map((service, i) => {
          const Accent = service.accent;
          return (
            <button
              type="button"
              className={`services__card ${i === selected ? "is-highlight" : ""}`}
              key={service.title}
              onClick={() => setSelected(i)}
              aria-pressed={i === selected}
            >
              <span className="services__icon">
                <CarIcon width={30} height={30} />
                <span className="services__icon-badge">
                  <Accent width={13} height={13} />
                </span>
              </span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}

function PromoPanel({ tab }) {
  const promo = PROMOS[tab];

  return (
    <div className="services__promo">
      <div className="services__promo-text">
        <h2 className="section-title">{promo.heading}</h2>
        <p className="section-subtitle">{promo.desc}</p>
        <button className="btn btn-primary services__promo-cta">
          Learn More <span>&rarr;</span>
        </button>
      </div>
      {promo.photo ? (
        <img className="services__photo" src={promo.photo} alt={promo.photoAlt} />
      ) : (
        <div className={`services__photo ${promo.photoClass}`} />
      )}
    </div>
  );
}

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

        {activeTab === "Rides" ? (
          <RidesPanel />
        ) : (
          <PromoPanel tab={activeTab} />
        )}
      </div>
    </section>
  );
}
