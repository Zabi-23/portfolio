

import express from 'express';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js'; // Importera din router

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware för CORS
app.use(cors({
  origin: '*', // Tillåt alla ursprung (OBS: detta är inte säkert för produktion, men vi kan göra detta för att felsöka)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Middleware för att hantera OPTIONS-förfrågningar (preflight requests)
app.options('*', cors());

// Middleware för att hantera JSON
app.use(express.json());

// Använd router för portfolioroutes
app.use('/api/v1/portfolio', portfolioRouter);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
