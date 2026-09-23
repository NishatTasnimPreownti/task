import { CompassIcon, ShieldIcon, CarIcon } from "./icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Together.css";

const CARDS = [
  {
    title: "Freedom",
    desc: "Choose your fare, vehicle and driver.",
    icon: CompassIcon,
  },
  {
    title: "Safe travel",
    desc: "Choose your fare, vehicle and driver.",
    icon: ShieldIcon,
  },
  {
    title: "Choose Your Preferred Car",
    desc: "Pick a ride that matches your comfort and budget.",
    icon: CarIcon,
  },
];

export default function Together() {
  const gridRef = useScrollReveal(".together__card");

  return (
    <section className="together section">
      <div className="container">
        <h2 className="section-title">
          More Than Miles &mdash; <br /> We Bring People Together
        </h2>

        <div className="together__grid" ref={gridRef}>
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div className="together__card" key={card.title}>
                <span className="together__icon">
                  <Icon />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
