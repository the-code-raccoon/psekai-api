import { MongoClient } from "mongodb";
let url = "mongodb://localhost:27017/";
// let url = process.env.DB_URL;

export const getUser = (user) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;

      return db
        .db("psekai")
        .collection("users")
        .find({ userID: user })
        .toArray((err, result) => {
          if (err) throw err;

          db.close();
          console.log(result)
          resolve(result[0]);
        });
    });
  });
};

export const checkPassword = ({ user, password }) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;

      return db
        .db("psekai")
        .collection("users")
        .find({ userID: user, password })
        .toArray((err, result) => {
          if (err) throw err;

          db.close();
          resolve(result[0]);
        });
    });
  });
};
