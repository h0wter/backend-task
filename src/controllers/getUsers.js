import { User, Profile } from "../models/index.js";
import { responseMapper } from "../helpers/response-mapper.helper.js";

const getUsers = async (req, res) => {
  const { role } = req.query;

  try {
    const users = await User.findAll({
      include: Profile,
      ...(role && { where: { role } }),
    });
    const mappedUsers = responseMapper(users);

    res.json(mappedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getUsers;
