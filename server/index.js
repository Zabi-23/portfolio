


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Updated CORS configuration
const corsOptions = {
  origin: 'https://portfolio-client-ochre-rho.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Middleware to handle preflight OPTIONS requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://portfolio-client-ochre-rho.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

app.use(express.json());

// Simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Use portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app; // Export app for Vercel
