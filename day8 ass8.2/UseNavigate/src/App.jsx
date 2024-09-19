import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Product from "./componenets/Product";
import Contact from "./componenets/Contact";
import Nav from "./componenets/Nav";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
