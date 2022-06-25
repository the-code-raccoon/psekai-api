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
      unit: "VIRTUAL SINGER",
      support_group: null,
      attribute: "cute",
      rarity: 1,
    },
    {
      _id: 2,
      character: "Hatsune Miku",
      title: "School SEKAI",
      unit: "VIRTUAL SINGER",
      support_group: "Leo/need",
      attribute: "cute",
      rarity: 2,
    },
    {
      _id: 3,
      character: "Akiyama Mizuki",
      title: "Nightcord at 25:00",
      unit: "Nightcord at 25:00",
      support_group: null,
      attribute: "cool",
      rarity: 2,
    },
  ];

  dbo.collection("cards").insertMany(cards, function (err, res) {
    if (err) throw err;
    console.log(`${res.insertedCount} cards inserted`);
    db.close();
  });
});
