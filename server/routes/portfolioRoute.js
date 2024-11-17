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

// Add CORS headers specifically for this route
router.use(cors({
  origin: 'https://portfolio-client-ochre-rho.vercel.app', // Your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Define route for sending email
router.post('/sendEmail', sendEmailController);

export default router;
