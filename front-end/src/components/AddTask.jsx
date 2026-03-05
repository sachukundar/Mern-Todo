import { useState } from "react";
import "../style/addtask.css"
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [taskData, setTaskData] = useState();
    const navigate = useNavigate()
    const handleAddTask = async() => {
        let results = await fetch(('http://localhost:3200/add-task'),{
            method:'Post',
            body: JSON.stringify(taskData),
            headers:{
                'content-Type': "Application/Json"
            }
        })
        results = results.json()
        if(results){
            navigate("/")
            console.log("data Stored")
        }
    }
    return (
        <div className="container">
            <h1>Add New Task</h1>
            <label htmlFor="">Title</label>
            <input onChange={(event) => { setTaskData((prev) => ({ ...prev, title: event.target.value })) }} type="text" name="title" placeholder="Enter task title" />
            <label htmlFor="">Description</label>
            <textarea onChange={(event) => { setTaskData((prev) => ({ ...prev, description: event.target.value })) }} type="text" rows={4} name="title" placeholder="Enter task title"></textarea>
            <button onClick={handleAddTask} className="submit">Add New Task</button>
        </div>
    )
}

export default AddTask;