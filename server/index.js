

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Updated and more explicit CORS setup
const allowedOrigins = [
  'https://portfolio-clent.vercel.app', // Your frontend URL
  'https://portfolio-clent-git-main-zabi-23s-projects.vercel.app',
  'https://portfolio-clent-jla10zs7d-zabi-23s-projects.vercel.app',
  'http://localhost:5173' // For local development
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Explicitly handle preflight OPTIONS requests for all routes
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

app.use(express.json());

// Simple root route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Portfolio router for API routes
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app;
