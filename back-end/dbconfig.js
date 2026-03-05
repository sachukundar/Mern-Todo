import { MongoClient } from "mongodb";
const url = "mongodb+srv://todo_mern:todo_mern123@todo.buqignd.mongodb.net/?appName=Todo";
const dbName = "mern-todo-project";
export const collectionName = "Todo";
const client = new MongoClient(url) 
export const connection = async() => {
    const connect = await client.connect();
    return await connect.db(dbName);
}