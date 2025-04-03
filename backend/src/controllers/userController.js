import registerUser from "../services/userSevice.js";

async function createUser(req, res) {

    try {
        const responce = await registerUser(req.body);

        return res.json({
            data: responce,
            message: "User created successfully!",
            success: true,
            //  statusCode: 201,
            error: {}
        })
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(error.statusCode).json({
            data: {},
            message: error.message,
            success: false,
            // statusCode: 500,
            error: error
        })
    }
    return res.json({
        message: "User created successfully!"
    })
}


export { createUser };