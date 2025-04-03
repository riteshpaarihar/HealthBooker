import express from 'express';
import authRoutes from './v1/authRoutes.js';
import userRoutes from "./v1/userRoutes.js";

const router = express.Router();

// Endpoint to handle POST requests
// User register routes
router.use("/user", userRoutes);
//User register routes
router.use("/auth", authRoutes);
export default router;