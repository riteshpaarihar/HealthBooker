import express from "express";
import { sendMessage, getMessages } from "../../controllers/messageController.js";
import { verifyAdmin } from "../../middleware/authAdminMiddleware.js";


const router = express.Router();

router.post("/send", sendMessage);
router.get("/all", verifyAdmin, getMessages); // For admin to see all messages

export default router;