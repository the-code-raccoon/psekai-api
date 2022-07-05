let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("psekai");
  const cards = [
    {
      cardID: 1,
      character: "Hatsune Miku",
      title: "Legendary Songstress",
      unit: "VIRTUAL SINGER",
      support_group: null,
      attribute: "cute",
      rarity: 1,
    },
    {
      cardID: 2,
      character: "Hatsune Miku",
      title: "School SEKAI",
      unit: "VIRTUAL SINGER",
      support_group: "Leo/need",
      attribute: "cute",
      rarity: 2,
    },
    {
      cardID: 3,
      character: "Kagamine Rin",
      title: "Bursting With Energy!",
      unit: "VIRTUAL SINGER",
      support_group: null,
      attribute: "mysterious",
      rarity: 1,
    },
    {
      cardID: 4,
      character: "Kagamine Rin",
      title: "Stage SEKAI",
      unit: "VIRTUAL SINGER",
      support_group: "MORE MORE JUMP!",
      attribute: "happy",
      rarity: 2,
    },
    {
      cardID: 5,
      character: "Kagamine Len",
      title: "Bursting With Power!",
      unit: "VIRTUAL SINGER",
      support_group: null,
      attribute: "happy",
      rarity: 1,
    },
    {
      cardID: 5,
      character: "Kagamine Len",
      title: "Street SEKAI",
      unit: "VIRTUAL SINGER",
      support_group: "Vivid BAD SQUAD",
      attribute: "mysterious",
      rarity: 2,
    },
    {
      cardID: 6,
      character: "Megurine Luka",
      title: "Cool Beauty",
      unit: "VIRTUAL SINGER",
      support_group: null,
      attribute: "pure",
      rarity: 1,
    },
    {
      cardID: 7,
      character: "Megurine Luka",
      title: "School SEKAI",
      unit: "VIRTUAL SINGER",
      support_group: "Leo/need",
      attribute: "happy",
      rarity: 2,
    },
    {
      cardID: 10,
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
