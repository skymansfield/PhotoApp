import User from "../models/User1.js";

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = user.createJWT();

    res.status(201).json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).json({ msg: "AN error occurred" });
  }
};

const login = async (req, res) => {
  res.send("login");
};

export { register, login };
