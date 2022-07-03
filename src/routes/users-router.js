import express from "express";

import { getUser, checkPassword } from "../db/queries/02_users.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const {user, password} = req.body;
  const userObj = await getAllCards({user, password});
  res.json(userObj);
});

router.get("/:userID", async (req, res) => {
  const { user } = req.params;
  const userObj = await getUser(user);
  res.json(userObj);
});
