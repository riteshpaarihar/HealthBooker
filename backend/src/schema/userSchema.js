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

// Create and Export User Model
const User = mongoose.model("User", userSchema);
export default User;