import express from "express";
import { MongoClient } from "mongodb";

import { clientPromise } from "./db/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3001, () => {
  console.log(`Server listening on port ${3001}`);
});
