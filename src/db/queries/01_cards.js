import { MongoClient } from "mongodb";
let url = "mongodb://localhost:27017/";
// let url = process.env.DB_URL;

export const getAllCards = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;

      return db
        .db("psekai")
        .collection("cards")
        .find()
        .toArray((err, result) => {
          if (err) throw err;

          db.close();
          resolve(result);
        });
    });
  });
};

export const getCardsByCharacter = (character) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;

      return db
        .db("psekai")
        .collection("cards")
        .find({ character })
        .toArray((err, result) => {
          if (err) throw err;

          db.close();
          resolve(result);
        });
    });
  });
};
