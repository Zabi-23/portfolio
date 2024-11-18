
// Updated server/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();

// Simplify CORS setup to allow all origins temporarily for debugging
app.use(cors());

app.use(express.json());

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Manually handle preflight requests
app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
  res.sendStatus(204);
});

// Use the portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

// Export the app for Vercel serverless function
export default app;
