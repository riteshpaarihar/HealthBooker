import { getAllDoctors, createDoctor } from "../repository/doctorRepository.js";

async function getDoctors(req, res) {
    try {
        const doctors = await getAllDoctors();
        return res.status(200).json({
            success: true,
            message: "Doctors retrieved successfully",
            data: doctors,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch doctors",
            error: error.message,
        });
    }
}

async function addDoctor(req, res) {
    try {
        const newDoctor = await createDoctor(req.body);
        return res.status(201).json({
            success: true,
            message: "Doctor added successfully",
            data: newDoctor,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to add doctor",
            error: error.message,
        });
    }
}

export { getDoctors, addDoctor };