import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRoutes from './routes/apiRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

// ✅ CORS Setup (for local + live frontend)
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

// ✅ Middleware to accept different data types
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(express.text()); // text/plain
app.use(cookieParser());



// ✅ API routes
app.use('/api', apiRoutes);

// ✅ Health check route
app.use('/', (req, res) => {
    res.send('Welcome to HealthBooker API');
});

// ✅ Start server
app.listen(PORT, async() => {
    await connectDB();
    console.log(`🚀 Server running on port ${PORT}`);
});