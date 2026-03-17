import express from "express";
import { addFood, getMyFoods, getDailySummary } from "../controllers/foodController.js";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", protect, addFood);
router.get("/", protect, getMyFoods);
router.get("/summary", protect, getDailySummary);

export default router;