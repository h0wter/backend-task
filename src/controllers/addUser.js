import db from "../db.js";
import { Profile } from "../models/index.js";
import { removeFields } from "../helpers/response-mapper.helper.js";

const addUser = async (req, res) => {
  const { username, email, role, firstName, lastName, state } = req.body;

  try {
    const transaction = await db.transaction();

    const createdProfile = await Profile.create(
      { firstName, lastName, state },
      { transaction }
    );

    const createdUser = await createdProfile.createUser(
      { username, email, role },
      { transaction }
    );

    await transaction.commit();

    const user = removeFields({
      ...createdProfile.toJSON(),
      ...createdUser.toJSON(),
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default addUser;
