import "./Blogs.css";

const BLOGS = [
  {
    date: "September 15, 2026",
    title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
  },
  {
    date: "September 20, 2026",
    title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
  },
  {
    date: "September 20, 2026",
    title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
  },
];

export default function Blogs() {
  return (
    <section className="blogs section">
      <div className="container">
        <div className="blogs__header">
          <div>
            <h2 className="section-title">Beyond Destinations</h2>
            <p className="section-subtitle">
              Discover travel hacks, guides, and inspirations for your next
              intercity trip with Garibook.
            </p>
          </div>
          <button className="btn btn-outline">Show All Blogs</button>
        </div>

        <div className="blogs__grid">
          {BLOGS.map((blog) => (
            <article className="blogs__card" key={blog.title}>
              <div className="blogs__thumb" />
              <span className="blogs__date">{blog.date}</span>
              <h3>{blog.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
