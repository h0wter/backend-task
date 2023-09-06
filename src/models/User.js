import { DataTypes, Model } from "sequelize";
import Profile from "./Profile.js";
import db from "../db.js";

class User extends Model {
  static async updateById(userId, body) {
    try {
      const user = await this.findByPk(userId);

      if (!user) {
        return { error: "User not found" };
      }

      const profile = await user.getProfile();
      await user.update(body);
      await profile.update(body);

      return { success: "User updated successfully" };
    } catch (error) {
      console.error(error);
      return { error: "Internal server error" };
    }
  }

  static async removeById(userId) {
    try {
      const user = await this.findByPk(userId);

      if (!user) {
        return { error: "User not found" };
      }

      const profile = await user.getProfile();
      await profile.destroy();
      await user.destroy();

      return { success: "User deleted successfully" };
    } catch (error) {
      console.error(error);
      return { error: "Internal server error" };
    }
  }
}

const model = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(255),
      defaultValue: "user",
      validate: {
        isIn: {
          args: [["user", "admin"]],
          msg: "State must be 'user' or 'admin'",
        },
      },
    },
    dataCreate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db,
    tableName: "users",
  }
);

model.belongsTo(Profile, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});
Profile.hasOne(model, {
  onDelete: "CASCADE",
});

export default model;
