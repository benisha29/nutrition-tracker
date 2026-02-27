import User from "../models/User.js"

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || ! password) {
            return res.status(400).json({
                message: "Please Provide All Fields"
            });
        }

        const userExist = await Use.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        const user = await Use.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};