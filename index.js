const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());


// userName : taskAdmin
// userPass : FFO49cZakxR4zImm




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://taskAdmin:<password>@cluster0.ynsqw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected')
  // perform actions on the collection object
  client.close();
});




app.get('/', (req, res)=>{
    res.send('connected with server');
});

app.listen(port, ()=>{
    console.log('My port is', port);
})