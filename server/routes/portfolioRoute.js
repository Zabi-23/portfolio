/* //server/routes/portfolioRoute.js


import express from "express";
import { sendEmailController } from "../controllers/portfolioController.js";

const router = express.Router();

// Definiera route för att skicka e-post
router.post("/sendEmail", sendEmailController);

// Exportera routern
export default router;


 */
import express from 'express';
import cors from 'cors';
import { sendEmailController } from '../controllers/portfolioController.js';

const router = express.Router();

// Apply CORS specifically for this route
const corsOptions = {
  origin: 'https://portfolio-clent.vercel.app', // Your frontend URL
  methods: 'POST',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

router.options('/sendEmail', cors(corsOptions)); // Handle preflight request for sendEmail route
router.post('/sendEmail', cors(corsOptions), sendEmailController);

export default router;

