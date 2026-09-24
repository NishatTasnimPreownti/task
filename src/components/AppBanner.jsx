import phonePhoto from "../assets/phone.png";
import "./AppBanner.css";

export default function AppBanner() {
  return (
    <section className="app-banner">
      <div className="container app-banner__inner">
        <div className="app-banner__text">
          <h2>
            Download
            <br /> Garibook Mobile App
          </h2>
          <p>Download our Customer, Smart Driver and Enterprise App</p>
          <button className="btn btn-yellow">
            Download App <span>&rarr;</span>
          </button>
        </div>
        <img
          className="app-banner__phone"
          src={phonePhoto}
          alt="A hand holding a phone showing the Garibook app home screen"
        />
      </div>
    </section>
  );
}
