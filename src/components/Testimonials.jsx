import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.",
    name: "Atif Haider",
    role: "Banker",
  },
  {
    quote:
      "Garibook made our intercity trip stress-free. Professional drivers and transparent pricing — exactly what we needed for a family journey.",
    name: "Mohammad Habibur Rahman",
    role: "Banker",
  },
  {
    quote:
      "Booking a car has never been this easy. I could choose my driver and fare, and the whole experience felt trustworthy from start to end.",
    name: "Sadia Afrin",
    role: "Service Holder",
  },
];

export default function Testimonials() {
  const gridRef = useScrollReveal(".testimonials__card");

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">Our Passengers Speak For Us</h2>

        <div className="testimonials__grid" ref={gridRef}>
          {TESTIMONIALS.map((t) => (
            <div className="testimonials__card" key={t.name}>
              <span className="testimonials__quote-mark">&ldquo;</span>
              <p>{t.quote}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
