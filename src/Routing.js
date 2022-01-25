import { Routes, Route } from "react-router-dom";
import EGNavbar from "./EGNavbar";

const Home = () => <p>Home</p>;
const Gallery = () => <p>Gallery</p>;
const Contact = () => <p>Contact</p>;

function Routing() {
    return <>
        <EGNavbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
}

export default Routing;