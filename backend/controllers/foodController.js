import Food from "../models/Food.js";

// ================= ADD FOOD =================
export const addFood = async (req, res) => {
  try {
    const { name, calories, protein, carbs, fat } = req.body;

    if (!name || !calories) {
      return res.status(400).json({ message: "Name and calories required" });
    }

    const food = await Food.create({
      user: req.user._id,   // 🔥 Comes from protect middleware
      name,
      calories,
      protein,
      carbs,
      fat,
    });

    res.status(201).json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ================= GET MY FOODS =================

export const getMyFoods = async (req, res) => {
  try {
    const { date } = req.query;

    let filter = { user: req.user._id };

    if (date) {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);

      const end = new Date(date);
      end.setHours(23, 59, 59, 999);

      filter.date = { $gte: start, $lte: end };
    }

    const foods = await Food.find(filter);

    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};