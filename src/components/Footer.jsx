import "./Footer.css";

const COLUMNS = [
  {
    title: "garibook",
    links: ["About Us", "Customer Reviews", "Career", "Newsroom", "Garibook Map"],
  },
  {
    title: "Services",
    links: [
      "Intercity Rental",
      "Airport Pick and Drop",
      "Hourly Rental",
      "Vehicle Management System (VMS)",
    ],
  },
  {
    title: "Become Our Partner",
    links: [
      "Become a Smart Driver",
      "Become a member of Garibook Club",
      "Garibook Business for Corporate Travel",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__columns">
          {COLUMNS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4>Contacts</h4>
            <ul className="footer__contact">
              <li>support@garibook.com</li>
              <li>
                Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144,
                Gulshan, Dhaka-1212
              </li>
              <li>+88 09 678 11 22 33</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Download Our Garibook Mobile App</h4>
            <button className="btn btn-primary footer__download">
              Download App
            </button>
          </div>
        </div>

        <div className="footer__meta">
          <div className="footer__brands">
            <span>
              A Product By <b>NRB Solution Ltd.</b>{" "}
              <a href="#">Visit Website</a>
            </span>
            <span>
              Powered By <b>Link 3 Technologies</b> <a href="#">Visit Website</a>
            </span>
          </div>

          <div className="footer__legal">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Trade license number: TRAD/DNCC/013806/2024</span>
          <span>&copy; {new Date().getFullYear()} Garibook.com</span>
        </div>
      </div>
    </footer>
  );
}
