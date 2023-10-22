const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

let db;
const port = 5174;
const dbpass = "78yZkFtFuGmU9jLw";
const uri = "mongodb+srv://Tab:" + dbpass + "@tabtrackerdb.a7lfbvs.mongodb.net/?retryWrites=true&w=majority";

app.get("/", async (req, res) => {
  const allUsers = db.collection("users").find().toArray();
  console.log(allUsers);
  res.render(allUsers);
})

const client = new MongoClient(uri);

async function start() {
  try {
    await client.connect();
    db = client.db();
    await client.db("config").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
  app.listen(port);
  console.log("TabTracker Server listening on port " + port + "!");
}
start().catch(console.dir);

