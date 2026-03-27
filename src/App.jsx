import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "../src/index.css";

function App() {
  return (
    <>
      <div className="particles"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
