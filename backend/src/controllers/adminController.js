import { User } from "../schema/userSchema.js";
import { Doctor } from "../schema/userSchema.js";
import Appointment from "../schema/appointmentSchema.js";

// Get All Users

export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({ role: { $in: ["admin", "patient"] } }).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

// Get All Doctors
export const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find().select("-password");
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctors", error });
    }
};

// Get All Appointments
export const getAllAppointments = async(req, res) => {
    try {
        // Populate using correct field names: "doctor" and "patient"
        const appointments = await Appointment.find()
            .populate("doctor", "firstName lastName email")
            .populate("patient", "firstName lastName email");

        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Error fetching appointments", error });
    }
};