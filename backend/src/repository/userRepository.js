import User from "../schema/userSchema.js";

// async function findUser(parameters) {
//     try {
//         // const responce = await User.findOne({...parameters });
//         const response = await User.findOne(parameters).select("+password");
//         return responce;

//     } catch (error) {
//         console.log(error);
//     }
// }

async function findUser(parameters) {
    try {
        const response = await User.findOne(parameters).select("+password"); // Include password field
        return response;
    } catch (error) {
        console.log("Error in findUser:", error);
    }
}

async function createUser(userDetails) {
    try {
        const newUser = await User.create(userDetails);
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export {
    findUser,
    createUser,
}