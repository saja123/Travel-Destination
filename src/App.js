import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer.js";
import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails";
import NavBar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
