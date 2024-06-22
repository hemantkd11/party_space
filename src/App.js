// import logo from './logo.svg';
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User_login from "./Pages/User_login";
import Place_owner_login from "./Pages/Vender_login";
import User_register from "./Pages/User_register";
// import Newnav from "./Components/Newnav";
import Places from "./Pages/Places";
import CheckoutPage from "./Pages/CheckoutPage";
// import RentApp from "./Components/input";
import Add_details from "./Pages/Add_details";
import Payment_page from "./Pages/Payment_page";
import Vender_register from "./Pages/Vender_register";
import My_Bookings from "./Pages/My_Bookings";
import Host from "./Pages/Hostplace";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Newnav/> */}
      <Routes>
        <Route path="/party_space/" element={<Home />} />
        <Route path="/party_space/user_login" element={<User_login />} />
        <Route
          path="/party_space/place_owner_login"
          element={<Place_owner_login />}
        />
        <Route
          path="/party_space/onspace/user_register"
          element={<User_register />}
        />
        <Route
          path="/party_space/host_register"
          element={<Vender_register />}
        />
        <Route path="/party_space/onspalce/places" element={<Places />} />
        <Route path="/party_space/checkout" element={<CheckoutPage />} />
        {/* <Route path="/rent" element={<RentApp/>}/> */}
        <Route path="/party_space/add_details" element={<Add_details />} />
        <Route path="/party_space/Payment" element={<Payment_page />} />
        <Route path="/party_space/mybooking" element={<My_Bookings />} />
        <Route path="/party_space/host" element={<Host />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
