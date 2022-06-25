let MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db("psekai");
    dbo.collection("cards").drop((err, res) => {
    if (err) throw err;
    if (res) console.log("Cards collection dropped");
    db.close();
  });
});
