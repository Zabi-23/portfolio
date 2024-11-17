// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import portfolioRouter from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: "https://portfolio-client-ochre-rho.vercel.app", 
  optionsSuccessStatus: 200,
};

app.get('/', (req, res) => {
  res.send('Server is running. Use /api/v1/portfolio for API routes.');
});

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/v1/portfolio', portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
