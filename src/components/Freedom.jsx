import { CarIcon, DriverIcon, FareIcon } from "./icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import couplePhoto from "../assets/couple.png";
import "./Freedom.css";

const STEPS = [
  {
    title: "Choose the Car",
    desc: "Pick what suits your comfort.",
    icon: CarIcon,
  },
  {
    title: "Choose the Driver",
    desc: "Based on ratings and reviews.",
    icon: DriverIcon,
  },
  {
    title: "Choose the Fare",
    desc: "Select the bid that fits your budget.",
    icon: FareIcon,
  },
];

export default function Freedom() {
  const gridRef = useScrollReveal(".freedom__step");

  return (
    <section className="freedom">
      <div className="container">
        <h2 className="section-title freedom__title">Freedom in Every Journey</h2>

        <img
          className="freedom__photo"
          src={couplePhoto}
          alt="Couple enjoying a ride together and looking at a phone"
        />

        <div className="freedom__grid" ref={gridRef}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div className="freedom__step" key={step.title}>
                <span className="freedom__icon">
                  <Icon />
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
