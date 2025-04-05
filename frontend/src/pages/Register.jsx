import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"; // Import the Axios instance
import qs from "qs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axiosInstance.post("/user/register", qs.stringify(formData));
  //         console.log(response);
  //     toast.success("Registration Successful! Redirecting to login...", {
  //       position: "top-right",
  //       autoClose: 2000,
  //     });

  //     setTimeout(() => navigate("/login"), 2500);
  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Registration Failed. Try again!",
  //       { position: "top-right" }
  //     );
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axiosInstance.post("/user/register", formData); // ✅ FIXED
    console.log(response);
    toast.success("Registration Successful! Redirecting to login...", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => navigate("/login"), 2500);
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration Failed. Try again!",
      { position: "top-right" }
    );
  }
};

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
