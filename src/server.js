import express from "express";
import expressSession from "express-session";
import bodyParser from "body-parser";
import { router as cardsRouter } from "./routes/cards-router.js";
import { router as usersRouter } from "./routes/users-router.js";

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/api/cards", cardsRouter);
app.use("/api/users", usersRouter);

app.listen(3001, () => {
  console.log(`Server listening on port ${3001}`);
});
