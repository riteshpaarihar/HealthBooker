import jwt from 'jsonwebtoken'
import { User } from '../schema/userSchema.js';

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.header("Authorization") ?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); // Attach user to request

        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};


export default authMiddleware;