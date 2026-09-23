import { useScrollReveal } from "../hooks/useScrollReveal";
import "./News.css";

const NEWS = [
  {
    date: "December 05, 2024",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
  },
  {
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
  },
  {
    date: "December 04, 2024",
    title: "বাংলাদেশে প্রথমবার 'চান্দের গাড়ি' গাড়িবুক অ্যাপে",
  },
  {
    date: "January 29, 2025",
    title: "গাড়িবুক ও সুখীর চুক্তি – স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা",
  },
];

export default function News() {
  const gridRef = useScrollReveal(".news__card");

  return (
    <section className="news section">
      <div className="container">
        <h2 className="section-title">We Featured by Top news Platforms</h2>

        <div className="news__grid" ref={gridRef}>
          {NEWS.map((item) => (
            <article className="news__card" key={item.title}>
              <div className="news__thumb" />
              <span className="news__date">{item.date}</span>
              <h3>{item.title}</h3>
              <a href="#" className="news__link">
                Read Article &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
