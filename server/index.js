const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

let db;
const port = 3200;
const uri = "mongodb+srv://Tab:78yZkFtFuGmU9jLw@tabtrackerdb.a7lfbvs.mongodb.net/";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function start() {

  try {
    await client.connect();
    db = client.db()
    await client.db().command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  app.listen(port)
  console.log("TabTracker Server listening on port " + port + "!")

}
start().catch(console.dir);