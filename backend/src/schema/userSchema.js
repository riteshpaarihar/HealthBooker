// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// // User Schema Definition
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: [true, "First name is required"],
//         minlength: [3, "First name must be at least 3 characters long"],
//         maxlength: [50, "First name must be at most 50 characters long"],
//         trim: true,
//         lowercase: true,
//     },
//     lastName: {
//         type: String,
//         required: [true, "Last name is required"],
//         minlength: [3, "Last name must be at least 3 characters long"],
//         maxlength: [50, "Last name must be at most 50 characters long"],
//         trim: true,
//         lowercase: true,
//     },
//     mobileNumber: {
//         type: String,
//         required: [true, "Mobile number is required"],
//         trim: true,
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         trim: true,
//         unique: true,
//         match: [/\S+@\S+\.\S+/, "Invalid email address"],
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         minlength: [8, "Password must be at least 8 characters long"],
//         maxlength: [16, "Password must be at most 16 characters long"],
//         select: false, // Prevents password from being returned in queries by default
//     },
//     role: {
//         type: String,
//         enum: ["patient", "doctor", "admin"],
//         default: "patient",
//         trim: true,
//     },
// }, { timestamps: true });

// // Hash the password before saving to the database
// userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

// // Create and Export User Model
// const User = mongoose.model("User", userSchema);
// export default User;



import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// User Schema Definition
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"],
        maxlength: [50, "First name must be at most 50 characters long"],
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"],
        maxlength: [50, "Last name must be at most 50 characters long"],
        trim: true,
        lowercase: true,
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile number is required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "Invalid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [16, "Password must be at most 16 characters long"],
        select: false, // Prevents password from being returned in queries by default
    },
    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        default: "patient",
        trim: true,
    },
}, { timestamps: true });

// Hash the password before saving to the database
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Create User Model
const User = mongoose.model("User", userSchema);


// ============================
// ✅ Doctor Schema
// ============================
const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    specialization: {
        type: String,
        required: [true, "Specialization is required"],
        trim: true,
    },
    experience: {
        type: Number,
        required: [true, "Experience is required"],
        min: [0, "Experience must be a positive number"],
    },
    hospital: {
        type: String,
        required: [true, "Hospital name is required"],
        trim: true,
    },
    availability: {
        type: String,
        required: [true, "Availability is required"],
        trim: true,
    },
    fees: {
        type: Number,
        required: [true, "Consultation fee is required"],
        min: [0, "Fees cannot be negative"],
    }
}, { timestamps: true });

// Create Doctor Model
const Doctor = mongoose.model("Doctor", doctorSchema);

export { User, Doctor };