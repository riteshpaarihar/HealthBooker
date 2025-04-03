import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
      >
        {/* SEO Meta */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">Login to <span className="text-blue-600">HealthBooker</span></h1>
        <p className="text-gray-600 text-center mt-2">Access your account & manage your appointments</p>

        {/* Form */}
        <form className="mt-6">
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" />

          <label className="block mt-4 mb-2 text-gray-700 font-medium">Password</label>
          <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none" />

          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account? <Link to="/register" className="text-blue-600 font-medium hover:underline">Sign Up</Link></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
