// import jwt from "jsonwebtoken";
// import { User } from "../schema/userSchema.js";

// export const verifyAdmin = async(req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         console.log(token);
//         if (!token) return res.status(401).json({ message: "Unauthorized" });

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const adminUser = await User.findById(decoded.id);

//         if (!adminUser || adminUser.role !== "admin") {
//             return res.status(403).json({ message: "Access denied" });
//         }

//         req.user = adminUser;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Invalid token", error });
//     }
// };


import jwt from "jsonwebtoken";
import { User } from "../schema/userSchema.js";

export const verifyAdmin = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        //    console.log("Authorization Header:", authHeader); // Debugging: Check if header is present

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        // Extract token from "Bearer <TOKEN>"
        const token = authHeader.split(" ")[1];
        //console.log("Extracted Token:", token); // Debugging: Check if token is extracted

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //  console.log("Decoded Token:", decoded); // Debugging: Check what is decoded

        // Find admin user in DB
        const adminUser = await User.findById(decoded.id);
        // console.log("Admin User:", adminUser); // Debugging: Check if user is found

        if (!adminUser || adminUser.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }

        req.user = adminUser;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(401).json({ message: "Invalid token", error });
    }
};