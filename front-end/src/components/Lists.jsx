import React, { Fragment, useEffect, useState } from "react"
import '../style/list.css'
import { Link } from "react-router-dom";
const Lists = () => {
    const [taskData, setTaskData] = useState([])

    useEffect(() => {
        getListData()
    }, [])

    const getListData = async () => {
        let list = await fetch('http://localhost:3200/tasks');
        list = await list.json();
        if(list.success) setTaskData(list.result)
    }

    const deleteTask = async (id) => {
        let item = await fetch('http://localhost:3200/delete/' + id,{method:'delete'});
        item = await item.json()
        if(item.success) {console.log("item Deleted")
            getListData()
        }
    }
    return (
        <div>
            <h1>To Do List</h1>
            <ul className="task-list">
                <li className="list-header">S.No</li>
                <li className="list-header">Title</li>
                <li className="list-header">Description</li>
                <li className="list-header">Action</li>
                {
                    taskData && taskData.map((item, index) => {
                        return (<Fragment key ={item._id}><li className="list-items">{index}</li>
                            <li className="list-items">{item.title}</li>
                            <li className="list-items">{item.description}</li>
                            <li className="list-items"><button className="delete-item" onClick={() => deleteTask(item._id)}>Delete</button> <Link to ={"update/"+ item._id}className="update-item" >Update</Link></li></Fragment>)
                    })
                }
            </ul>
        </div>
    )
};

export default Lists;
