import { useScrollReveal } from "../hooks/useScrollReveal";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import "./Together.css";

const CARDS = [
  {
    title: "Airport Rentals",
    photo: p1,
    alt: "A family greeted at the airport with their luggage and a rental car",
  },
  {
    title: "Family Trips",
    photo: p2,
    alt: "A family enjoying a ride together in the back seat of a car",
  },
  {
    title: "Long Tours",
    photo: p3,
    alt: "A group of friends on a road trip beside their van at the beach",
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
          {CARDS.map((card) => (
            <div className="together__card" key={card.title}>
              <img className="together__photo" src={card.photo} alt={card.alt} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
