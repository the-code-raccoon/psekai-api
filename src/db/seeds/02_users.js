let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("psekai");
  const users = [
    {
      userID: "1",
      username: "admin",
      password: "123",
      scores: {
        1: {
          // name: "Hatsune Miku",
          talent: 0,
          "last-score": 100000,
          cards: [1, 2],
        },
        2: {
          // name: "Kagamine Rin",
          talent: 0,
          "last-score": 100000,
          cards: [3, 4],
        },
        3: {
          // name: "Kagamine Len",
          talent: 0,
          "last-score": 100000,
          cards: [5, 6],
        },
        4: {
          // name: "Megurine Luka",
          talent: 0,
          "last-score": 100000,
          cards: [7, 8],
        },
      },
    },
  ];

  dbo.collection("users").insertMany(users, function (err, res) {
    if (err) throw err;
    console.log(`${res.insertedCount} users inserted`);
    db.close();
  });
});
