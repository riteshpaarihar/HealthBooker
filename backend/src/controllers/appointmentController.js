import { getAllAppointments, createAppointment } from "../repository/appointmentRepository.js";

// Get all appointments
async function getAppointments(req, res) {
    try {
        const appointments = await getAllAppointments();
        return res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: appointments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch appointments",
            error: error.message,
        });
    }
}

// Book an appointment
async function bookAppointment(req, res) {
    try {
        const { patient, doctor, date, timeSlot } = req.body;

        if (!patient || !doctor || !date || !timeSlot) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        const newAppointment = await createAppointment(req.body);
        return res.status(201).json({
            success: true,
            message: "Appointment booked successfully",
            data: newAppointment,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to book appointment",
            error: error.message,
        });
    }
}

export { getAppointments, bookAppointment };