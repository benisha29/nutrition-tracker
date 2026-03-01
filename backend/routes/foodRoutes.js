import express from "express";
import { addFood, getMyFoods } from "../controllers/foodController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addFood);
router.get("/", protect, getMyFoods);

export default router;