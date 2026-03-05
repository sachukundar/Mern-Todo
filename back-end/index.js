import express from "express";
import { collectionName, connection } from "./dbconfig.js";

const app = express();
app.use(express.json());
app.get('/', (req, resp) => {
    resp.send({
        message: "basic API done",
        success: true
    })
})

app.post("/add-task", async (req, resp) => {
    const db = await connection();
    const collection = await db.collection(collectionName);
    const result = await collection.insertOne(req.body);
    if (result) {
        resp.send({message : "Task added Success",success: true, result})
    }
    resp.send("working...")
})
app.listen(3200, () => {
    console.log("Server running");
});
