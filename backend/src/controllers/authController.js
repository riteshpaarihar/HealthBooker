// import loginUser from "../services/authService.js";

// async function login(req, res) {
//     try {
//         const payload = req.body;
//         const responce = await loginUser(payload);
//         const result = await loginUser(req.body);
//         res.cookie("auth_token", responce, {
//             httpOnly: true,
//             secure: true,
//             maxAge: 7 * 24 * 60 * 60 * 1000,
//         })
//         return res.status(200).json({
//             success: true,
//             message: "User logged in successfully",
//             data: result,
//             error: {}
//         })
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: "Failed to login",
//             data: {},
//             error: error.message
//         })
//     }
// }
// export default login;
import loginUser from "../services/authService.js";

async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Authenticate user and get token
        const response = await loginUser({ email, password }); // ✅ Pass as an object

        if (!response.token) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // ✅ Set Cookie Correctly
        res.cookie("auth_token", response.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: response.token,
            data: response.user,
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to login",
            error: error.message
        });
    }
}

export default login;