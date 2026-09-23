import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CarIcon, TargetIcon, PinIcon, CalendarIcon } from "./icons";
import "./Hero.css";

const TRIP_TYPES = ["One Way", "Round Way", "Hourly"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Car Rental");
  const [tripType, setTripType] = useState("One Way");

  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.7 })
        .from(paraRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
          cardRef.current,
          { opacity: 0, y: 40, scale: 0.98, duration: 0.7 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 ref={headingRef}>Assurance of Effortless Travel</h1>
          <div className="hero__text-side">
            <p ref={paraRef}>
              Choose your city, pick your car and enjoy the journey with
              Garibook&rsquo;s best drivers.
            </p>
            <button ref={ctaRef} className="btn btn-yellow hero__download">
              Download App <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="hero__card" ref={cardRef}>
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
                  <CarIcon width={18} height={18} /> Choose a Car <b>*</b>
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

              {activeTab === "Airport Rental" ? (
                <label className="hero__field">
                  <span>
                    <TargetIcon width={18} height={18} /> Pickup Airport{" "}
                    <b>*</b>
                  </span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Airport
                    </option>
                    <option>Hazrat Shahjalal International Airport</option>
                    <option>Shah Amanat International Airport</option>
                    <option>Osmani International Airport</option>
                  </select>
                </label>
              ) : (
                <label className="hero__field">
                  <span>
                    <TargetIcon width={18} height={18} /> Pickup Location{" "}
                    <b>*</b>
                  </span>
                  <input type="text" placeholder="Enter Pickup Location" />
                </label>
              )}

              <label className="hero__field">
                <span>
                  <PinIcon width={18} height={18} /> Drop-off Location{" "}
                  <b>*</b>
                </span>
                <input type="text" placeholder="Enter Drop-off Location" />
              </label>

              <label className="hero__field">
                <span>
                  <CalendarIcon width={18} height={18} /> Pickup Date &amp;
                  Time <b>*</b>
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
