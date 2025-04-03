import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRoutes from './routes/apiRoutes.js'
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cookieParser());

// Import routes 
app.use('/api', apiRoutes);

app.listen(PORT, async() => {
    // Connect to MongoDB database
    await connectDB();
    console.log(`Server running on port ${PORT}`);

})