
//server/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: ['https://portfolio-client-tau-nine.vercel.app', process.env.CLIENT_URL, 'https://portfolio-client-mocha.vercel.app'],
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));  // Använd de specificerade corsOptions
app.options('*', cors(corsOptions)); // Hantera preflight-förfrågningar (OPTIONS)

app.use(express.json());

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Use the portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
