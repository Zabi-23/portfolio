

import express from 'express';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js'; // Importera din router

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware för CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://portfolio-clent.vercel.app',
  'https://portfolio-clent-git-main-zabi-23s-projects.vercel.app',
  'https://portfolio-clent-jla10zs7d-zabi-23s-projects.vercel.app'
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

// Alternativ för att hantera OPTIONS-förfrågningar
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Middleware för att hantera JSON
app.use(express.json());

// Använd router för portfolioroutes
app.use('/api/v1/portfolio', portfolioRouter);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
