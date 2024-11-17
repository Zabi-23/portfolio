import express from 'express';
import dotenv from 'dotenv';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Custom middleware to set CORS headers explicitly
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-clent.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
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
