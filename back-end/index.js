import express from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from 'cors';
import { ObjectId } from "mongodb";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/add-task", async (req, resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if (result) {
        resp.send({message : "Task added Success",success: true, result})
    }
    resp.send("working...")
})

app.get("/tasks/:id", async (req, resp) => {
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.findOne({_id: new ObjectId(id)});
    if (result) {
        resp.send({message : "task fetched",success: true, result})
    }
    resp.send("Error try after sometime")
})

app.put("/update-task", async (req, resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const {_id,...fields} = req.body;
    const update = {$set:fields}
    const result = await collection.updateOne({_id: new ObjectId(_id)}, update);
    if (result) {
        resp.send({message : "task fetched",success: true, result})
    }
    resp.send("Error try after sometime")
})

app.get("/tasks", async (req, resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.find().toArray();
    if (result) {
        resp.send({message : "Task added Success",success: true, result})
    }
    resp.send("Error try after sometime")
})

app.delete("/delete/:id", async (req, resp) => {
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({_id: new ObjectId(id)});
    if (result) {
        resp.send({message : "Task deleted Success",success: true, result})
    }
    resp.send("Error try after sometime")
})

app.listen(3200, () => {
    console.log("Server running");
});
