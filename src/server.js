import express from "express";
import expressSession from "express-session";
import { router as cardsRouter } from "./routes/cards-router.js";

const app = express();

app.use("/api/cards", cardsRouter);

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
