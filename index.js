const express = require("express");

const port = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require("./utils/connectDB");
const taskRouter = require("./routes/task.route");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static('./uploads'));

app.use('/api/task', taskRouter)
connectDB()

// const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.ynsqw.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run(){
//     try{
//         await client.connect();
//         const taskCollection  = client.db('taskTool').collection('task');

//         app.get('/task', async(req, res)=>{
//             const result = await taskCollection.find().toArray()
//             res.send(result);
//         });

//         app.get('/task/completed/', async(req, res)=>{
//             const query = {status:'completed'};
//             const task = await taskCollection.find(query).toArray();
//             res.send(task);
//         });
//         app.get('/task/reviewed/', async(req, res)=>{
//             const query = {review:'completed'};
//             const task = await taskCollection.find(query).toArray();
//             res.send(task);
//         });

//         app.post('/task', async (req, res)=>{
//             const newTask = req.body;
//             const result = await taskCollection.insertOne(newTask);
//             res.send(result);
//         });
        
//         app.put('/task/:id', async(req, res)=>{
//             const id = req.params.id;
//             const taskData = req.body;
//             const filter = {_id: ObjectId(id)};
//             const options = {upsert: true};
//             const updatedDoc = {
//                 $set: {
//                     title: taskData.title,
//                     note: taskData.note,
//                     date: taskData.date,
//                     startDate: taskData.startDate,
//                 }
//             }
//             const result = await taskCollection.updateOne(filter, updatedDoc, options);
//             res.send(result);
//         });

//         app.put('/task/completed/:id', async(req, res)=>{
            
//             const id = req.params.id;
//             const filter = {_id: ObjectId(id)};
//             const updatedDoc = {
//                 $set: {
//                     status: req.body.status,
//                 },
//             }
//             const result = await taskCollection.updateOne(filter, updatedDoc);
//             res.send(result);
//         });
//         app.put('/task/reviewed/:id', async(req, res)=>{
//             const id = req.params.id;
//             const filter = {_id: ObjectId(id)};
//             const updatedDoc = {
//                 $set: {
//                     review: 'completed',
//                 },
//             }
//             const result = await taskCollection.updateOne(filter, updatedDoc);
//             res.send(result);
//         });

//         app.delete('/task/:id', async(req, res) =>{
//             const id = req.params.id;
//             const query = {_id:ObjectId(id)};
//             const result = await taskCollection.deleteOne(query);
//             res.send(result);
//         })

//     } finally{

//     }
// }
// run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('connected with server');
});

app.listen(port, ()=>{
    console.log('My port is', port);
});