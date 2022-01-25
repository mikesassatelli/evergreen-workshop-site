import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function Routing() {
    return(
    <div className="main">
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
    )
}

export default Routing;