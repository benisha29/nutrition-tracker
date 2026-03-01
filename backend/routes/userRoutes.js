import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/profile", protect, getUserProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;