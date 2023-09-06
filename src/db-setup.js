import db from "./db.js";
import User from "./models/User.js";
import Profile from "./models/Profile.js";

export const syncDatabase = async () => {
  try {
    await db.sync();
    await User.sync();
    await Profile.sync();
    await db.authenticate();
    console.log("Tables synced successfully");
  } catch (error) {
    console.error("Error syncing tables:", error);
  }
};
