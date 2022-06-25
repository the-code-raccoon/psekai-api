import express from "express";
import expressSession from "express-session";
import { clientPromise } from "./db/db.js";

import { getAllCards, getCardsByCharacter } from "./db/queries/01_cards.js";

const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/cards", async (req, res) => {
  const cards = await getAllCards();

  console.log(cards);
  res.json({ PLS: "WORK" });
});

app.get("/cards2", async (req, res) => {
  const cards = await getCardsByCharacter();

  console.log(cards);
  res.json({ PLS: "WORK2" });
});

app.use(
  expressSession({
    secret: "fkdlsfjkldsfjldskfjds",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 60 * 1000,
    },
  })
);

app.listen(3001, () => {
  console.log(`Server listening on port ${3001}`);
});
