import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './models/users.js';

dotenv.config();

const app = express();
const port = 5001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('Connected to the DB'))
  .catch((error) => console.log('Error in connecting to the DB:', error));

// Middleware
app.use(bodyParser.json()); // Parses incoming requests as JSON
app.use(cors()); // Enable CORS for all routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
