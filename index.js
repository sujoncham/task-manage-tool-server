const express = require("express");

const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());


// userName : taskAdmin
// userPass : FFO49cZakxR4zImm





const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.ynsqw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const taskCollection  = client.db('taskTool').collection('task');

        app.get('/task', async(req, res)=>{
            const result = await taskCollection.find().toArray()
            res.send(result);
        })

    } finally{

    }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('connected with server');
});

app.listen(port, ()=>{
    console.log('My port is', port);
})