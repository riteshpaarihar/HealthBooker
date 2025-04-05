import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";

const BookingDetails = () => {
  const { id } = useParams(); // Get appointment ID from URL
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTimeSlot, setNewTimeSlot] = useState("");

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await axiosInstance.get(`/appointment/${id}`);
        setAppointment(response.data);
      } catch (error) {
        toast.error("Failed to fetch appointment details.");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointmentDetails();
  }, [id]);

  const handleEdit = async () => {
    try {
      await axiosInstance.put(`/appointment/${id}`, {
        date: newDate || appointment.date,
        timeSlot: newTimeSlot || appointment.timeSlot,
      });

      toast.success("Appointment updated successfully!");
      setEditMode(false);
      setAppointment({ ...appointment, date: newDate, timeSlot: newTimeSlot });
    } catch (error) {
      toast.error("Failed to update appointment.");
    }
  };

  const handleCancel = async () => {
    try {
      await axiosInstance.delete(`/appointment/${id}`);
      toast.success("Appointment canceled.");
      navigate("/doctors");
    } catch (error) {
      toast.error("Failed to cancel appointment.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-16">
      <ToastContainer position="top-center" autoClose={2000} />
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Appointment Details</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{appointment.doctor.user.firstName} {appointment.doctor.user.lastName}</h3>
        <p className="text-gray-600">Specialization: {appointment.doctor.specialization}</p>
        <p className="text-gray-500">Hospital: {appointment.doctor.hospital}</p>
        <p className="text-gray-500">Fees: ₹{appointment.doctor.fees}</p>

        <hr className="my-4" />

        <h4 className="text-lg font-semibold">Appointment Info</h4>
        <p>Date: {appointment.date}</p>
        <p>Time Slot: {appointment.timeSlot}</p>

        <hr className="my-4" />

        <h4 className="text-lg font-semibold">Rules & Policies</h4>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Arrive 10 minutes before your scheduled time.</li>
          <li>Late arrival may result in appointment cancellation.</li>
          <li>Cancellation must be done at least 24 hours in advance.</li>
          <li>Consultation fees are non-refundable.</li>
        </ul>

        <hr className="my-4" />

        {/* Edit Mode */}
        {editMode ? (
          <div>
            <h4 className="text-lg font-semibold">Reschedule Appointment</h4>
            <input
              type="date"
              className="w-full p-2 border rounded mt-2"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <select
              className="w-full p-2 border rounded mt-2"
              value={newTimeSlot}
              onChange={(e) => setNewTimeSlot(e.target.value)}
            >
              <option value="">Select a Time Slot</option>
              {[
                "09:00 AM - 09:30 AM", "09:30 AM - 10:00 AM", "10:00 AM - 10:30 AM",
                "10:30 AM - 11:00 AM", "01:00 PM - 01:30 PM", "01:30 PM - 02:00 PM",
                "02:00 PM - 02:30 PM", "02:30 PM - 03:00 PM", "05:00 PM - 05:30 PM",
                "05:30 PM - 06:00 PM", "06:00 PM - 06:30 PM", "06:30 PM - 07:00 PM"
              ].map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>

            <button onClick={handleEdit} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">
              Save Changes
            </button>
            <button onClick={() => setEditMode(false)} className="ml-2 px-6 py-2 bg-gray-400 text-white rounded-lg">
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button onClick={() => setEditMode(true)} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Edit
            </button>
            <button onClick={handleCancel} className="px-6 py-2 bg-red-600 text-white rounded-lg">
              Cancel Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
