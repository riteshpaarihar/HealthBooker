import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { FaUserMd, FaHospital, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";

const timeSlots = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "01:00 PM - 01:30 PM",
  "01:30 PM - 02:00 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
  "06:30 PM - 07:00 PM",
];

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    timeSlot: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosInstance.get("/doctors/getalldoctors");
        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
      ``;
    };
    fetchDoctors();
  }, []);

  const handleBookAppointment = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      toast.error("Please log in to book an appointment.");

      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds

      return;
    }

    if (!selectedDoctor || !appointmentData.date || !appointmentData.timeSlot) {
      toast.error("Please select a doctor, date, and time slot.");
      return;
    }

    try {
      // await axiosInstance.post("/bookAppointment", {
      //   patient: userId,
      //   doctor: selectedDoctor._id,
      //   date: appointmentData.date,
      //   timeSlot: appointmentData.timeSlot,
      // });
      const token = localStorage.getItem("token");

      await axiosInstance.post(
        "/bookAppointment",
        {
          patient: userId,
          doctor: selectedDoctor._id,
          date: appointmentData.date,
          timeSlot: appointmentData.timeSlot,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Appointment booked successfully!");
      setSelectedDoctor(null);
      setAppointmentData({ date: "", timeSlot: "" });
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Meet Our Doctors
      </h2>
      {loading ? (
        // <p className="text-center text-gray-600">Loading doctors...</p>
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor._id}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaUserMd className="text-blue-600 text-4xl mx-auto" />
              <h3 className="text-xl font-bold mt-2">
                {doctor.user.firstName} {doctor.user.lastName}
              </h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="text-gray-500 flex items-center justify-center gap-1">
                <FaHospital /> {doctor.hospital}
              </p>
              <p className="text-gray-500 flex items-center justify-center gap-1">
                <FaCalendarCheck /> {doctor.availability}
              </p>
              <p className="text-lg font-semibold mt-2">Fees: ₹{doctor.fees}</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setSelectedDoctor(doctor)}
              >
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Appointment Booking Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Book Appointment with {selectedDoctor.user.firstName}{" "}
              {selectedDoctor.user.lastName}
            </h3>

            {/* Date Selection */}
            <label className="block text-sm font-semibold mb-1">
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded mb-4"
              value={appointmentData.date}
              onChange={(e) =>
                setAppointmentData({ ...appointmentData, date: e.target.value })
              }
            />

            {/* Time Slot Selection (Dropdown) */}
            <label className="block text-sm font-semibold mb-1">
              Select Time Slot
            </label>
            <select
              className="w-full p-2 border rounded mb-4"
              value={appointmentData.timeSlot}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  timeSlot: e.target.value,
                })
              }
            >
              <option value="">Select Time</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            {/* Modal Actions */}
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => setSelectedDoctor(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={handleBookAppointment}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;
