import express from 'express';
import authRoutes from './v1/authRoutes.js';
import userRoutes from "./v1/userRoutes.js";
import doctorRoutes from "./v1/doctorRoutes.js";
import bookAppointment from "./v1/appointmentRoutes.js";
import adminRoutes from "./v1/adminRoutes.js";
import messageRoutes from "./v1/messageRoutes.js";
const router = express.Router();

// Endpoint to handle POST requests
// User register routes
router.use("/user", userRoutes);
//User register routes
router.use("/auth", authRoutes);

// doctor routes
router.use("/doctors", doctorRoutes);
// bookAppointment 
router.use("/bookAppointment", bookAppointment);

// admin routes
router.use("/admin", adminRoutes);

// massage routes
router.use("/messages", messageRoutes);
export default router;