import smartDriverPhoto from "../assets/m.png";
import "./CtaDuo.css";

export default function CtaDuo() {
  return (
    <section className="cta-duo section">
      <div className="container cta-duo__stack">
        <div className="cta-duo__banner cta-duo__banner--primary">
          <h3>From Booking to Arrival It&rsquo;s All in Your Hands</h3>
          <button className="btn btn-primary">Download App</button>
        </div>

        <div className="cta-duo__banner cta-duo__banner--driver">
          <div className="cta-duo__driver-text">
            <span className="cta-duo__eyebrow">Be a Smart Driver</span>
            <h3>
              0% Commission
              <br />
              100% Freedom
            </h3>
            <button className="btn btn-primary">
              Download Smart Driver App <span>&rarr;</span>
            </button>
          </div>
          <img
            className="cta-duo__driver-photo"
            src={smartDriverPhoto}
            alt="A Garibook smart driver holding up the driver app on his phone"
          />
        </div>
      </div>
    </section>
  );
}
