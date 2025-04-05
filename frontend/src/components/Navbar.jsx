import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    ...(user ? [{ name: "Appointments", path: "/appointments" }] : []),
    { name: "Notifications", path: "/notifications" },
   // { name: "Apply", path: "/apply" },
    ...(!user ? [{ name: "Apply", path: "/apply" }] : []),
    { name: "Contact", path: "/contact" },
    
    ...(user ? [{ name: "Profile", path: "/profile" }] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center bg-blue-600 rounded-bl-lg">
        <Link to="/" className="text-2xl font-bold text-white">
          Health<span className="text-yellow-300">Booker</span>
        </Link>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-3 py-2 transition duration-300 ${
                location.pathname === link.path
                  ? "text-yellow-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-300"
                  : "hover:text-yellow-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        {user ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-4 text-white"
          >
            <span className="text-yellow-300 font-semibold">Hi, {user.firstName} 👋</span>
            <button
              onClick={logout}
              className="px-3 py-1 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Logout
            </button>
          </motion.div>
        ) : (
          <div className="hidden md:flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 border border-yellow-300 text-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-yellow-300 text-blue-600 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-blue-600 shadow-lg z-50 p-6 flex flex-col"
      >
        <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
          <X size={28} />
        </button>

        <div className="mt-12 flex flex-col space-y-5 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 transition duration-300 ${
                location.pathname === link.path ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col space-y-3">
          {user ? (
            <>
              <span className="text-yellow-300 font-semibold text-center">
                Hi, {user.firstName} 👋
              </span>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition text-center"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-yellow-300 text-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-600 transition text-center"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-yellow-300 text-blue-600 rounded-lg hover:bg-yellow-400 transition text-center"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
