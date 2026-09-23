import "./CtaDuo.css";

export default function CtaDuo() {
  return (
    <section className="cta-duo section">
      <div className="container cta-duo__grid">
        <div className="cta-duo__card cta-duo__card--primary">
          <h3>From Booking to Arrival It&rsquo;s All in Your Hands</h3>
          <button className="btn btn-primary">Download App</button>
        </div>

        <div className="cta-duo__card cta-duo__card--dark">
          <span className="cta-duo__badges">
            <span>0% Commission</span>
            <span>100% Freedom</span>
          </span>
          <h3>Be a Smart Driver</h3>
          <button className="btn btn-outline">Download Smart Driver App</button>
        </div>
      </div>
    </section>
  );
}
