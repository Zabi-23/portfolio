

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Specifik CORS-konfiguration med alla nödvändiga inställningar
const corsOptions = {
  origin: "https://portfolio-client-ochre-rho.vercel.app", // Din Vercel klient-URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"], // Se till att alla nödvändiga headers tillåts
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// En enkel route för att kontrollera om servern körs
app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

// Använd portfolio-routern
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
