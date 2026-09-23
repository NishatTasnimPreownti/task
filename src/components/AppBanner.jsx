import "./AppBanner.css";

export default function AppBanner() {
  return (
    <section className="app-banner">
      <div className="container app-banner__inner">
        <div>
          <span className="app-banner__eyebrow">Download</span>
          <h2>Garibook Mobile App</h2>
          <p>Download our Customer, Smart Driver and Enterprise App</p>
          <button className="btn btn-primary">Download App</button>
        </div>
        <div className="app-banner__phone" aria-hidden="true">
          <div className="app-banner__phone-screen" />
        </div>
      </div>
    </section>
  );
}
