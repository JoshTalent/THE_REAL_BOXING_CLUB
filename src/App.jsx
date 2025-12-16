import { Routes, Route } from "react-router-dom";
import MobileOverflowFix from "./MobileOverflowFix";

// import main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Fitness from "./pages/programs/Fitness";
import Fundamentals from "./pages/programs/Fundamentals";
import Kids_teens from "./pages/programs/Kids-teens";
import Blog from "./pages/Blog";
import Coaches from "./pages/Coaches";

const App = () => {
  return (
    <>
      {" "}
      <MobileOverflowFix />
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/fitness" element={<Fitness />} />
        <Route path="/programs/fundamentals" element={<Fundamentals />} />
        <Route path="/programs/kids-teens" element={<Kids_teens />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
    </>
  );
};

export default App;
