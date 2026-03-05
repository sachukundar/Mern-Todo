import { MongoClient } from "mongodb";
const url = "";
const dbName = "mern-todo-project";
export const collectionName = "Todo";
const client = new MongoClient(url) 
export const connection = async() => {
    const connect = await client.connect();
    return await connect.db(dbName);
}
