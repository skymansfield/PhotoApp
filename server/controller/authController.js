import User from "../models/User1.js";

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = user.createJWT();

    res
      .status(201)
      .json({ user: { email: user.email, password: user.password }, token });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "There is already an account with this email" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(500).json({ msg: "Please Try Again" });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(500).json({ msg: "Invalid credentials" });
  }
  const isCorrect = await user.comparePassword(password);

  if (!isCorrect) {
    res.status(500).json({ msg: "Invalid credentials" });
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(201).json({ user, token });
};

export { register, login };
