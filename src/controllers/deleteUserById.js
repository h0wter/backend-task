import { User } from "../models/index.js";

const deleteUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await User.removeById(userId);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default deleteUserById;
