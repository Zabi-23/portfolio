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
import { sendEmailController } from '../controllers/portfolioController.js';

const router = express.Router();

// Ensure the route is correctly defined to handle POST requests
router.post('/sendEmail', sendEmailController);

export default router;



