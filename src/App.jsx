import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import Services from "./components/Services";
import Freedom from "./components/Freedom";
import Together from "./components/Together";
import CtaDuo from "./components/CtaDuo";
import News from "./components/News";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import AppBanner from "./components/AppBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <Services />
        <Freedom />
        <Together />
        <CtaDuo />
        <News />
        <Testimonials />
        <Blogs />
        <AppBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
