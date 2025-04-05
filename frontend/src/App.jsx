// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import DoctorRegister from "./pages/DoctorRegister";
// import { ToastContainer } from "react-toastify";
// import { AuthProvider } from "./context/AuthContext";
// import Home from "./pages/Home";
// import Doctors from "./pages/Doctors";
// import Appointments from "./pages/Appointments";
// import Profile from "./pages/Profile";
// import Contact from "./pages/Contact";
// import DoctorRegistration from "./pages/DoctorRegister";
// import AdminDashboard from "./pages/AdminDashboard";

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin"); // Exclude navbar/footer for admin routes

//   return (
//     <>
//       {!isAdminRoute && <Navbar />}
//       <div className="min-h-screen pt-16 bg-gray-50">
//         <Routes>{children}</Routes>
//       </div>
//       {!isAdminRoute && <Footer />}
//       <ToastContainer position="top-center" autoClose={2000} />
//     </>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Layout>
//           <Route path="/" element={<Home />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/notifications" element={<h1 className="text-center text-2xl mt-10">Notifications</h1>} />
//           <Route path="/apply" element={<DoctorRegistration />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/doctor-register" element={<DoctorRegister />} />
//           <Route path="/appointments" element={<Appointments />} />

//           {/* Admin Dashboard without Header/Footer */}
//           <Route path="/admin/*" element={<AdminDashboard />} />
//         </Layout>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorRegister from "./pages/DoctorRegister";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div className="min-h-screen pt-16 bg-gray-50">{children}</div>
      {!isAdminRoute && <Footer />}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/notifications" element={<h1 className="text-center text-2xl mt-10">Notifications</h1>} />
            <Route path="/apply" element={<DoctorRegister />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctor-register" element={<DoctorRegister />} />
            <Route path="/appointments" element={<Appointments />} />
            
            {/* Admin Dashboard (Excluding Navbar/Footer) */}
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;

