import express from "express";
import { getAllUsers, getAllDoctors, getAllAppointments } from "../../controllers/adminController.js";
import { verifyAdmin } from "../../middleware/authAdminMiddleware.js";

const router = express.Router();

// Routes
router.get("/users", verifyAdmin, getAllUsers); // Get all users
router.get("/doctors", verifyAdmin, getAllDoctors); // Get all doctors
router.get("/appointments", verifyAdmin, getAllAppointments); // Get all appointments

export default router;