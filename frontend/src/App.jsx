import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorRegister from "./pages/DoctorRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50"> {/* Add padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<h1 className="text-center text-2xl mt-10">Home Page</h1>} />
          <Route path="/doctors" element={<h1 className="text-center text-2xl mt-10">Doctors Page</h1>} />
          <Route path="/appointments" element={<h1 className="text-center text-2xl mt-10">Appointments</h1>} />
          <Route path="/notifications" element={<h1 className="text-center text-2xl mt-10">Notifications</h1>} />
          <Route path="/apply" element={<h1 className="text-center text-2xl mt-10">Apply for Doctor</h1>} />
          <Route path="/contact" element={<h1 className="text-center text-2xl mt-10">Contact Us</h1>} />
          <Route path="/profile" element={<h1 className="text-center text-2xl mt-10">Profile Page</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor-register" element={<DoctorRegister />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
