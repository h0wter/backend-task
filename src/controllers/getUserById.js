import { User, Profile } from "../models/index.js";
import { responseMapper } from "../helpers/response-mapper.helper.js";

const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({
      where: { id: userId },
      include: Profile,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const mappedUser = responseMapper(user);

    res.json(mappedUser);
  } catch (error) {
    console.error(error.message);
    console.error(error.name);
    res.status(500).json({ error: error.message });
  }
};

export default getUserById;
