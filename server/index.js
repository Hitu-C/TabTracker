const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();

let db;
const port = process.env.PORT;
const uri = "mongodb://Tab:" + process.env.DBPASS + "@ac-9wodkrn-shard-00-00.a7lfbvs.mongodb.net:27017,ac-9wodkrn-shard-00-01.a7lfbvs.mongodb.net:27017,ac-9wodkrn-shard-00-02.a7lfbvs.mongodb.net:27017/?ssl=true&replicaSet=atlas-10su2o-shard-0&authSource=admin&retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/api/users", async (req, res) => {
  try {
    console.log("Getting users...");
    const usersCursor = db.collection('users').find({});
    const users = await usersCursor.toArray();
    // {"error":"Cannot read properties of undefined (reading 'collection')"}
    console.log("Users obtained")
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function start() {

  try {
    await client.connect();
    const db = client.db("tabtracker")
    await db.command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  app.listen(port)
  console.log("TabTracker Server listening on port " + port + "!")

}
start().catch(console.dir);