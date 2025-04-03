import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    specialization: "",
    experience: "",
    hospital: "",
    availability: "",
    fees: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint.com/api/doctors/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Doctor registered successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error registering doctor:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Doctor Registration</h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />

          <input type="text" name="specialization" placeholder="Specialization (e.g., Gynecologist)" value={formData.specialization} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="number" name="experience" placeholder="Experience (Years)" value={formData.experience} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="text" name="hospital" placeholder="Hospital Name" value={formData.hospital} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="text" name="availability" placeholder="Availability (e.g., Mon-Sat, 9AM-5PM)" value={formData.availability} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />
          <input type="number" name="fees" placeholder="Consultation Fees (INR)" value={formData.fees} onChange={handleChange} className="w-full p-3 mb-3 border rounded-lg" required />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorRegister;
