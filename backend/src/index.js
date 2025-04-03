import express from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';

const app = express();

app.use(express.json());


app.listen(PORT, async() => {
    // Connect to MongoDB database
    await connectDB();
    console.log(`Server running on port ${PORT}`);

})