import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRoutes from './routes/apiRoutes.js'
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cookieParser());

// // Enable CORS for all origins (Temporary Fix)
// app.use(cors());

// ✅ More Secure: Allow only specific frontend origin
// app.use(
//     cors({
//         origin: "http://localhost:5173", // Allow frontend
//         credentials: true, // ✅ Allow credentials (cookies, auth headers)
//         methods: "GET, POST, PUT, DELETE",
//         allowedHeaders: "Content-Type, Authorization",
//     })
// );

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://health-booker-nine.vercel.app"
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Debug middleware to print incoming origin
app.use((req, res, next) => {
    console.log("🛰️ Incoming request from origin:", req.headers.origin);
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


// Import routes 
app.use('/api', apiRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to HealthBooker API');
})

app.listen(PORT, async() => {
    // Connect to MongoDB database
    await connectDB();
    console.log(`Server running on port ${PORT}`);

})