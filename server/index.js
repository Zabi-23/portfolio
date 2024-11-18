

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();

// Updated CORS setup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Set this to a specific origin instead of "*" for security purposes in production
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
  if (req.method === 'OPTIONS') {
    // Send OK status for preflight requests
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Use the portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

// Export the app for Vercel serverless function
export default app;
