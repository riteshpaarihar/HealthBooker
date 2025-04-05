import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        if (!token) {
          toast.error("You must be logged in to view appointments.");
          return;
        }

        const response = await axiosInstance.get("/bookAppointment/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setAppointments(response.data.data);
        } else {
          toast.error("Failed to fetch appointments.");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error(error.response?.data?.message || "Error fetching appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">My Appointments</h2>

      {loading ? (
        <Loading/>
      ) : appointments.length === 0 ? (
        <p className="text-center text-gray-600">No appointments found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{appointment.doctor.user.firstName} {appointment.doctor.user.lastName}</h3>
              <p className="text-gray-600">Specialization: {appointment.doctor.specialization}</p>
              <p className="text-gray-500">Date: {appointment.date}</p>
              <p className="text-gray-500">Time: {appointment.timeSlot}</p>
              <p className="text-green-600 font-semibold">Status: {appointment.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
