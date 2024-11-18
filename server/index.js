

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

// Använd uppdaterade cors-alternativ för varje inkommande förfrågan
app.use(cors(corsOptions));  // Täcker vanliga förfrågningar
app.options('*', cors(corsOptions)); // Hantera preflight-förfrågningar (OPTIONS)

// Middleware för att sätta nödvändiga CORS-headers vid varje förfrågan
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');  // Specifiera en specifik klient-URL för ökad säkerhet
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Middleware för att tolka JSON payloads
app.use(express.json());

// En enkel route för att kontrollera om servern är igång
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Använd portfolio-routern
app.use('/api/v1/portfolio', cors(corsOptions), portfolioRouter); // Lägg till CORS på specifika rutter om så önskas

// Hantera preflight-förfrågningar på specifika rutter
app.options('/api/v1/portfolio/*', cors(corsOptions));

// Starta servern på angiven port
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
