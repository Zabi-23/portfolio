import express from 'express';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js'; // Importera din router

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware för CORS
const allowedOrigins = [
  'http://localhost:5173', // För utvecklingsmiljö
  'https://portfolio-clent.vercel.app', // Din live front-end domän
  'https://portfolio-clent-git-main-zabi-23s-projects.vercel.app',
  'https://portfolio-clent-jla10zs7d-zabi-23s-projects.vercel.app',
  'https://portfolio-clent-i2fmnyl57-zabi-23s-projects.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware för att hantera JSON
app.use(express.json());

// Använd router för portfolioroutes
app.use('/api/v1/portfolio', portfolioRouter);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
