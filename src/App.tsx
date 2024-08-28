import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Responsive from "./components/Responsive";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Responsive />
      <Home />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
