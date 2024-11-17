
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set allowed origins for CORS
const allowedOrigins = [
  'https://portfolio-clent.vercel.app',
  'https://portfolio-clent-git-main-zabi-23s-projects.vercel.app',
  'https://portfolio-clent-jla10zs7d-zabi-23s-projects.vercel.app',
  'http://localhost:5173' // Local development
];

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Debugging middleware to log request origin and method
app.use((req, res, next) => {
  console.log('Request Method:', req.method);
  console.log('Request Origin:', req.headers.origin);
  console.log('Request Path:', req.path);
  next();
});

app.use(express.json());

// Root route for server status check
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app; // Export app for Vercel compatibility
