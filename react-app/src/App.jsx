import Header from "./components/Header";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Social from "./components/Social";
import Contact from "./components/Contact";
import BlogUpdates from "./components/BlogUpdates";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <div id="page">
        <Header />
        <main id="top">
          <div className="container">
            <Slider />
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <hr />
            <Products />
            <hr />
            <div className="row">
              <Social />
              <Contact />
              <BlogUpdates />
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}


