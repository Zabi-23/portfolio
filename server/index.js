

// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = 8080;

// Update CORS options to allow requests from localhost:5173
const corsOptions = {
  origin: "http://localhost:5173", // Update to match your frontend's URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Use the portfolio router
app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
