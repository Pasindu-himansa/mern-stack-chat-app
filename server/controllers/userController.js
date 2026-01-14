// Sign up new user

import User from "../models/user.js";

export const signup = async (req, res) => {
  const { fullName, email, password, bio } = req.body;
  try {
    if (!fullName || !email || !password || !bio) {
      return res.json({ success: false, message: "Missing details" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "Missing Details" });
    }
  } catch (error) {}
};
