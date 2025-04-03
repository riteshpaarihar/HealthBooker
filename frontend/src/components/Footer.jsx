import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">HealthBooker</h2>
          <p className="mt-3 text-sm text-gray-600">
            Your trusted platform for booking appointments with verified doctors. Experience hassle-free healthcare access.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="/doctors" className="hover:text-blue-500 transition">Find a Doctor</Link>
            <Link to="/appointments" className="hover:text-blue-500 transition">Book an Appointment</Link>
            <Link to="/about" className="hover:text-blue-500 transition">About Us</Link>
            <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h3>
          <address className="not-italic space-y-3">
            <p className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              123 Health Street, New York, USA
            </p>
            <p className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              +1 234 567 890
            </p>
            <p className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              support@healthbooker.com
            </p>
          </address>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-gray-600">&copy; {new Date().getFullYear()} HealthBooker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
