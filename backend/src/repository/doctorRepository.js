// import { Doctor } from "../schema/userSchema.js";

// async function getAllDoctors() {
//     return await Doctor.find({});
// }

// async function createDoctor(doctorDetails) {
//     return await Doctor.create(doctorDetails);
// }

// export { getAllDoctors, createDoctor };




import { Doctor, User } from "../schema/userSchema.js";

async function createDoctor(doctorDetails) {
    // Extract necessary fields
    const { firstName, lastName, mobileNumber, email, password, specialization, experience, hospital, availability, fees } = doctorDetails;

    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Doctor with this email already exists.");
    }

    // Create a new User with role 'doctor'
    const newUser = new User({ firstName, lastName, mobileNumber, email, password, role: "doctor" });
    await newUser.save();

    // Create a Doctor entry linked to the User
    const newDoctor = new Doctor({
        user: newUser._id, // Link Doctor to User
        specialization,
        experience,
        hospital,
        availability,
        fees
    });

    return await newDoctor.save();
}

async function getAllDoctors() {
    return await Doctor.find().populate("user", "firstName lastName email");
}

export { getAllDoctors, createDoctor };