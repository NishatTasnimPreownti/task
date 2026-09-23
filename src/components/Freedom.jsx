import "./Freedom.css";

const STEPS = [
  {
    title: "Choose the Car",
    desc: "Pick what suits your comfort.",
    icon: "🚗",
  },
  {
    title: "Choose the Driver",
    desc: "Based on ratings and reviews.",
    icon: "🧑‍✈️",
  },
  {
    title: "Choose the Fare",
    desc: "Select the bid that fits your budget.",
    icon: "💳",
  },
];

export default function Freedom() {
  return (
    <section className="freedom">
      <div className="freedom__photo" role="img" aria-label="Couple enjoying a ride and looking at a phone">
        <div className="freedom__photo-overlay" />
      </div>

      <div className="container">
        <h2 className="section-title freedom__title">Freedom in Every Journey</h2>

        <div className="freedom__grid">
          {STEPS.map((step) => (
            <div className="freedom__step" key={step.title}>
              <span className="freedom__icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
