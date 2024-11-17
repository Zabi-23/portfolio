

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Simplified and explicit CORS setup
app.use(cors({
  origin: 'https://portfolio-clent.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Simple root route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Portfolio router for API routes
app.use('/api/v1/portfolio', portfolioRouter);

// Add the handler for the .well-known/vercel/microfrontend-routing path
app.get('/.well-known/vercel/microfrontend-routing', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app;
