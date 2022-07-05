import express from "express";

import { getUser, checkPassword } from "../db/queries/02_users.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const { user, password } = req.body;
  const userObj = await checkPassword({ user, password });
  res.json(userObj);
});

router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  const userObj = await getUser(userID);
  res.json(userObj);
});
