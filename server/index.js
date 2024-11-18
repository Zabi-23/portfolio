

//server/index.js
//server/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Uppdaterade CORS-alternativ
const corsOptions = {
  origin: (origin, callback) => {
    // Tillåt specifika klienter eller alla om origin är undefined (t.ex. för Postman eller localhost)
    if (!origin || ['https://portfolio-client-tau-nine.vercel.app', 'https://portfolio-client-mocha.vercel.app', 'https://portfolio-server-nine-flax.vercel.app'].includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

// Använd CORS globalt med uppdaterade alternativ
app.use(cors(corsOptions));  // Täcker alla inkommande förfrågningar

// Middleware för att tolka JSON payloads
app.use(express.json());

// Middleware för att sätta nödvändiga CORS-headers manuellt
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');  // Specifiera ursprung för att öka säkerhet
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// En enkel route för att kontrollera om servern är igång
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Använd portfolio-routern
app.use('/api/v1/portfolio', portfolioRouter); // Lägg till portfolio-router utan ytterligare CORS-konflikt

// Starta servern på angiven port
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
