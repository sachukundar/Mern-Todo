import { useEffect, useState } from "react";
import "../style/addtask.css"
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
    const [taskData, setTaskData] = useState({});
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        getTaskDetails(id)
    }, [id ])
    const handleAddTask = async () => {
        debugger
        let results = await fetch(('http://localhost:3200/update-task/'), {
            method: 'put',
            body: JSON.stringify(taskData),
            headers: {
                'Content-Type': "Application/Json"
            }
        })  
        let task = await results.json();
        if (task) {
            navigate("/")
        }
    }
    const getTaskDetails = async (id) => {
        let task = await fetch('http://localhost:3200/tasks/'+id);
        task = await task.json();
        if (task.result) {
            setTaskData(task.result)
        }
    }

    return (
        <div className="container">
            <h1>Update Task</h1>
            <label htmlFor="">Title</label>
            <input value={taskData?.title} onChange={(event) => { setTaskData((prev) => ({ ...prev, title: event.target.value })) }} type="text" name="title" placeholder="Enter task title" />
            <label htmlFor="">Description</label>
            <textarea value={taskData?.description} onChange={(event) => { setTaskData((prev) => ({ ...prev, description: event.target.value })) }} type="text" rows={4} name="title" placeholder="Enter task title"></textarea>
            <button onClick={handleAddTask} className="submit">Update Task</button>
        </div>
    )
}

export default UpdateTask;