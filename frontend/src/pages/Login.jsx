// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosInstance";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";
// import { motion } from "framer-motion";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("/user/login", { email, password });
// console.log("Full login response:", response.data);

//       const userData = response.data?.user;
      
//       login(userData); // Set user in context
//       console.log("Logged in user:", userData); // in Login
//       toast.success("Login Successful!", { autoClose: 2000 });
//       setTimeout(() => navigate("/"), 2000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
  
     
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
//       >
//         <h1 className="text-2xl font-bold text-gray-800 text-center">
//           Login to <span className="text-blue-600">HealthBooker</span>
//         </h1>
//         <p className="text-gray-600 text-center mt-2">Access your account & manage appointments</p>

//         <form onSubmit={handleSubmit} className="mt-6">
//           <label className="block mb-2 text-gray-700 font-medium">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
//             required
//           />

//           <label className="block mt-4 mb-2 text-gray-700 font-medium">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
//             required
//           />

//           <button
//             type="submit"
//             className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-gray-700">
//             Don't have an account?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="text-blue-600 font-medium hover:underline cursor-pointer"
//             >
//               Register
//             </span>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ Import icons for show/hide
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ State for toggling password visibility

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", { email, password });
  
      console.log("🔹 Full login response:", response.data);
  
      if (response.data.success && response.data.data?.user) {
        const userData = response.data.data.user;
        const token = response.data.data.token;
  
        if (token) {
          localStorage.setItem("token", token);  // ✅ Store token
          console.log("✅ Token saved:", localStorage.getItem("token"));
        } else {
          console.error("❌ No token received from server.");
        }
  
        login(userData); // ✅ Store user in context
  
        toast.success("Login Successful!", { autoClose: 2000 });
        setTimeout(() => navigate("/"), 2000);
      } else {
        console.error("❌ Invalid login response:", response.data);
        toast.error("Invalid login response");
      }
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };
  

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axiosInstance.post("/auth/login", { email, password });

//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token); // ✅ Store token
//       console.log("�� Token saved:", localStorage.getItem("token"));
//       toast.success("Login successful!");

//       if (response.data.role === "admin") {
//         navigate("/admin"); // Redirect admin to dashboard
//       } else {
//         navigate("/");
//       }
//     } else {
//       toast.error("❌ No token received from server.");
//       console.error("❌ No token in response:", response.data);
//     }
//   } catch (error) {
//     toast.error("Login failed! Check credentials.");
//     console.error("❌ Login error:", error.response?.data || error.message);
//   }
// };


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Login to <span className="text-blue-600">HealthBooker</span>
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Input */}
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none"
            required
          />

          {/* Password Input with Toggle */}
          <label className="block mt-4 mb-2 text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // ✅ Toggle password visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:border-blue-500 focus:outline-none pr-10"
              required
            />
            {/* Show/Hide Password Button */}
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
