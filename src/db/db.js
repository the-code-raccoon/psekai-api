import { MongoClient } from "mongodb";

const CONNECTION_URL = "mongodb://localhost:27017/psekai";

let client;
export let clientPromise;

if (!CONNECTION_URL) {
  throw new Error("Please add your Mongo URI to .env bruth");
}

client = new MongoClient(CONNECTION_URL);
 clientPromise = client
  .connect()
  .then(() => console.log("Connected to mongodb"));

