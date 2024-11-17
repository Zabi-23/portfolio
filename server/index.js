

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Tillåt CORS från din deployade klient-URL
app.use(cors({
  origin: "https://portfolio-client-ochre-rho.vercel.app", // Byt till din Vercel klient-URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // Om du behöver skicka cookies
}));

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
