const express = require("express");

const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        });

        app.get('/task/completed/', async(req, res)=>{
            const query = {role:'completed'};
            const task = await taskCollection.find(query).toArray();
            res.send(task);
        });

        app.post('/task', async (req, res)=>{
            const newTask = req.body;
            const result = await taskCollection.insertOne(newTask);
            res.send(result);
        });
        
        app.put('/task/:id', async(req, res)=>{
            const id = req.params.id;
            const taskData = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updatedDoc = {
                $set: {
                    title: taskData.title,
                }
            }
            const result = await taskCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        });

        app.put('/task/completed/:id', async(req, res)=>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const updatedDoc = {
                $set: {
                    role: 'completed',
                },
            }
            const result = await taskCollection.updateOne(filter, updatedDoc);
            res.send(result);
        });

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