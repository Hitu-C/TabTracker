const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require("jsonwebtoken");
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

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
    const usersCursor = client.db("tabtrackerdb").collection('users').find({});
    if (usersCursor) {
      const users = await usersCursor.toArray();
      
      let html = '<table><tr><th>Username</th><th>Email</th><th>Password</th><th>Time Spent</th><th>Time Idle</th><th>URLs</th><th>Token</th></tr>';
      users.forEach(user => {
        const username = Object.keys(user)[1];
        const userData = user[username][0];
        const urls = userData.urls ? userData.urls.join(', ') : ''; // checks if urls have a value
        html += `<tr><td>${username}</td><td>${userData.email}</td><td>${userData.password}</td><td>${userData.timeSpent}</td><td>${userData.timeIdle}</td><td>${urls}</td><td>${userData.token}</td></tr>`;
      });
      html += '</table>';

      res.send(html);
    } else {
      res.status(500).json({ error: "Unable to get users cursor" });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.toString() });
  }
});

app.get("/api/users/json", async (req, res) => {
  try {
    const usersCursor = client.db("tabtrackerdb").collection('users').find({});
    if (usersCursor) {
      const users = await usersCursor.toArray();

      res.send(users);
    } else {
      res.status(500).json({ error: "Unable to get users cursor" });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.toString() });
  }
});

/*
// http://localhost:5174/api/create?username=test3&email=test3@test3.test3&password=test3pass
app.get("/api/create", async (req, res) => {
  try {
    const { username, email, password } = req.query;
    const newUser = {
      [username]: [
        {
          email,
          password,
          timeSpent: "0",
          timeIdle: "0",
          urls: [""],
        },
      ],
    };
    const result = await client.db("tabtrackerdb").collection('users').insertOne(newUser);
    res.json({ message: "User created successfully", result });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.toString() });
  }
});
*/


/*
fetch('http://localhost:5174/api/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'testUser',
    email: 'testUser@test.com',
    password: 'testPassword',
    ADMINPASSWORD: 'yourAdminPassword',
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

app.post("/api/create", async (req, res) => {
  try {
    const { username, email, password, ADMINPASSWORD } = req.body;

    if (ADMINPASSWORD !== process.env.ADMINPASSWORD) {
      return res.status(403).json({ 
        error: "Unauthorized", 
        receivedParams: { username, email, password, ADMINPASSWORD } 
      });
    }

    const newUser = {
      [username]: [
        {
          email,
          password,
          timeSpent: "0",
          timeIdle: "0",
          urls: [""],
        },
      ],
    };
    const result = await client.db("tabtrackerdb").collection('users').insertOne(newUser);
    res.json({ Message: "User created successfully", result });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ Error: error.toString() });
  }
});

app.post("/api/token/create", (req, res) => {
  const { username, ADMINPASSWORD } = req.body;
  try {
    if (ADMINPASSWORD == process.env.ADMINPASSWORD) {
      const createdToken = jwt.sign({ username }, process.env.ADMINPASSWORD);
      const db = client.db("tabtrackerdb");
      db.collection("users").updateOne(
        { username },
        { $set: { token: createdToken } }
      );
      res.json({ token: createdToken });
    } else {
      return res.status(403).json({ 
        error: "Unauthorized", 
        receivedParams: { username, ADMINPASSWORD } 
      });
    }
  } catch (error) {
    console.error('Error creating token:', error);
    res.status(500).json({ error: error.toString() });
  }
});

app.post("/api/token/validate", (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = jwt.verify(token, process.env.ADMINPASSWORD);
    const { username } = decodedToken;

    const db = client.db("tabtrackerdb");
    const user = db.collection("users").findOne({ username });
    if (user) {
      res.json(user);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error('Error validating token:', error);
    res.json(false);
  }
});

async function start() {

  try {
    await client.connect();
    const db = client.db("tabtrackerdb")
    await db.command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  app.listen(port)
  console.log("TabTracker Server listening on port " + port + "!")

}
start().catch(console.dir);