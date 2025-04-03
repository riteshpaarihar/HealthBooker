import Appointment from "../schema/appointmentSchema.js";

// Get all appointments
async function getAllAppointments() {
    return await Appointment.find().populate("patient doctor", "firstName lastName email role");
}

// Create a new appointment
// async function createAppointment(appointmentData) {
//     return await Appointment.create(appointmentData);
// }

async function createAppointment(appointmentDetails) {
    try {
        const newAppointment = await Appointment.create(appointmentDetails);
        return newAppointment;
    } catch (error) {
        throw new Error("Database operation failed: " + error.message);
    }
}

export { getAllAppointments, createAppointment };