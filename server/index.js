const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

let db;
const port = process.env.PORT;
const dbpass = process.env.DBPASS;
const uri = "mongodb+srv://Tab:" + dbpass + "@tabtrackerdb.a7lfbvs.mongodb.net/?retryWrites=true&w=majority";

app.get("/", async (req, res) => {
  const allUsers = db.collection("users").find().toArray();
  console.log(allUsers);
  res.render(allUsers);
})

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
    await client.db("users").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    await client.close();
  }
  app.listen(port)
  console.log("TabTracker Server listening on port " + port + "!")

}
start().catch(console.dir);

