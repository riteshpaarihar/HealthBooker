import { findUser } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_EXPIRE, JWT_SECRET } from "../config/serverConfig.js";


async function loginUser(authDetails) {
    const email = authDetails.email;
    const PlanePassword = authDetails.password;

    const user = await findUser({ email });
    // console.log("Received email password :", email, PlanePassword);


    if (!user) {
        throw { message: "User not found", statusCode: 404 };
    }
    // console.log("Plain Password Entered:", PlanePassword);
    // console.log("Stored Hashed Password:", user.password);
    const isMatch = await bcrypt.compare(PlanePassword, user.password);
    console.log("Is password match?", isMatch);
    if (!isMatch) {
        throw { message: "Incorrect Password", statusCode: 401 };
    }

    const userRole = user.role ? user.role : "patient";
    console.log("User Role:", userRole);

    const token = jwt.sign({ id: user._id, email: user.email, role: userRole }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
    return {
        token,

        user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: userRole,
            phone: user.phone,
            address: user.address,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    };

}


export default loginUser;