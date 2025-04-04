import express from "express";
import { getAppointments, bookAppointment, getAppointmentsonlyuser } from "../../controllers/appointmentController.js";
import authMiddleware from '../../middleware/authMiddleware.js'
const router = express.Router();
router.get("/user", authMiddleware, getAppointmentsonlyuser);
router.get("/", getAppointments);
router.post("/", bookAppointment);

export default router;