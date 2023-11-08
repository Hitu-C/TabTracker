const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

let db;
const port = 3200;
const uri = "mongodb://Tab:@ac-9wodkrn-shard-00-00.a7lfbvs.mongodb.net:27017,ac-9wodkrn-shard-00-01.a7lfbvs.mongodb.net:27017,ac-9wodkrn-shard-00-02.a7lfbvs.mongodb.net:27017/?ssl=true&replicaSet=atlas-10su2o-shard-0&authSource=admin&retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/api/users", async (req, res) => {
  const users = client.db("tabtracker").collection('users').find({});
  res.json(users);
});

async function start() {

  try {
    await client.connect();
    db = client.db()
    await client.db("tabtracker").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  app.listen(port)
  console.log("TabTracker Server listening on port " + port + "!")

}
start().catch(console.dir);