import { User } from "../models/index.js";

const updateUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await User.updateById(userId, req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default updateUserById;
