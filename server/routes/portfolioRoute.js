 //server/routes/portfolioRoute.js

// Updated server/routes/portfolioRoute.js

import express from "express";
import { sendEmailController } from "../controllers/portfolioController.js";

const router = express.Router();

// Define route to send email
router.post("/sendEmail", async (req, res) => {
  try {
    await sendEmailController(req, res);
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Failed to send email.");
  }
});

// Export the router
export default router;

 






