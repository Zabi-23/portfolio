
//server/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;


const corsOptions = {
  origin: [process.env.CLIENT_URL, 'http://localhost:5173'], 
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. ');
});

// Use the portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

