import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Flight_Listing } from "./Pages";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import FlightBooking from "./Pages/FlightBooking/index";
import TourPackage from "./Pages/TourPackage";
import Contact from "./Pages/Page/contactUs";
import PrivacyPage from "./Pages/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flight-listing" element={<Flight_Listing />} />
        <Route path="/FlightBooking" element={<FlightBooking />}/>
        <Route path="/Tour_Package" element={<TourPackage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/privacy_Policy" element={<PrivacyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
