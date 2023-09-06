import "dotenv/config";
import express from "express";
import logger from "morgan";
import cors from "cors";
import { syncDatabase } from "./db-setup.js";
import {
  getUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
} from "./controllers/index.js";

const { PORT = 3000 } = process.env;

export const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

syncDatabase();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/api/users", getUsers);
app.get("/api/users/:userId", getUserById);
app.post("/api/users", addUser);

app.put("/api/users/:userId", updateUserById);

app.delete("/api/users/:userId", deleteUserById);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
