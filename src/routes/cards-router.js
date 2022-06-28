import express from "express";

import { getAllCards, getCardsByCharacter } from "../db/queries/01_cards.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const cards = await getAllCards();
  const json = {}
  for (const card of cards) {
    json[card._id] = card;
  }
  // console.log(cards);
  res.json(json);
});

router.get("/character", async (req, res) => {
  const cards = await getCardsByCharacter();

  // console.log(cards);
  res.json({ PLS: "WORK2" });
});