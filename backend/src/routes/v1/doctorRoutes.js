import express from "express";
import { getDoctors, addDoctor } from "../../controllers/doctorController.js";

const router = express.Router();

router.get("/getalldoctors", getDoctors);
router.post("/register", addDoctor);

export default router;