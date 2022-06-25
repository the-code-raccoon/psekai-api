let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("psekai");
  const cards = [
    {
      _id: 1,
      character: "Hatsune Miku",
      title: "Legendary Songstress",
    },
    {
      _id: 2,
      character: "Hatsune Miku",
      title: "School SEKAI",
    },
    {
      _id: 3,
      character: "Akiyama Mizuki",
      title: "Nightcord at 25:00",
    },
  ];

  dbo.collection("cards").insertMany(cards, function (err, res) {
    if (err) throw err;
    console.log(`${res.insertedCount} cards inserted`);
    db.close();
  });
});
