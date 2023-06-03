import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Middle from "./components/Middle/Middle";
import Maps from "./components/Maps/Maps";
import { Route, Routes } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
