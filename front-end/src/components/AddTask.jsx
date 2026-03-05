import "../style/addtask.css"

const AddTask = () => {
    return (
        <div className="container">
            <h1>Add New Task</h1>
            <form>
                <label htmlFor="">Title</label>
                <input type="text" name="title" placeholder="Enter task title" />
                <label htmlFor="">Description</label>
                <textarea type="text" rows={4} name="title" placeholder="Enter task title"></textarea>
                <button className="submit">Add New Task</button>
            </form>
        </div>
    )
}

export default AddTask;