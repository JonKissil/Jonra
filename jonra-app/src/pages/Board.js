import { useParams } from "react-router-dom";
import { getTasks } from "../api/tasks.js"
import { useEffect, useState } from "react";
import { Task } from "./Task.js";
import { Link } from "react-router-dom";
import { removeTask, createTask } from "../api/tasks";
import "./task-style.css";

const Board = () => {

    const { name, id } = useParams();
    const [tasks, setTasks] = useState([]);
    const [taskParams, setTaskParams] = useState(["", "None", "M", "NS"]);

    const handleGetTasks = async () => {
        const res = await getTasks(name, id);
        setTasks(res)
    }

    const handleAddTasks = async () => {
        const res = await createTask(name, id, ...taskParams);

        handleGetTasks();
    }

    const handleRemove = async (taskName) => {
        await removeTask(name, id, taskName)
        handleGetTasks();
    }

    useEffect(() => {
        handleGetTasks();
    }, [])

    return (
        <div className="board-container">
            <h1 className="board-title">Tasks</h1>

            <div className="task-form">
                <h2>Create new Task</h2>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        id="taskName"
                        type="text"
                        required
                        onChange={() => {
                            setTaskParams([document.getElementById("taskName").value, taskParams[1], taskParams[2], taskParams[3]]);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        id="taskDesc"
                        type="text"
                        placeholder="None"
                        onChange={() => {
                            setTaskParams([taskParams[0], document.getElementById("taskDesc").value, taskParams[2], taskParams[3]]);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Priority:</label>
                    <input
                        id="taskPriority"
                        type="text"
                        placeholder="M"
                        onChange={() => {
                            setTaskParams([taskParams[0], taskParams[1], document.getElementById("taskPriority").value, taskParams[3]]);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <input
                        id="taskStatus"
                        type="text"
                        placeholder="NS"
                        onChange={() => {
                            setTaskParams([taskParams[0], taskParams[1], taskParams[2], document.getElementById("taskStatus").value]);
                        }}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleAddTasks}>Create Task</button>
            </div>

            <div className="tasks-list">
                {tasks.length ? tasks.map((task) => (
                    <Task
                        key={task.fields.name}
                        taskName={task.fields.name}
                        boardId={id}
                        description={task.fields.description}
                        priority={task.fields.priority}
                        status={task.fields.status}
                    >
                        <div className="task-actions">
                            <button className="btn btn-danger" onClick={() => handleRemove(task.fields.name)}>Remove task</button>
                        </div>
                    </Task>
                )) : <p className="no-tasks">No tasks.</p>}
            </div>

            <Link to={`/home/${name}`} className="back-link">← Back to Home</Link>
        </div>
    );
};

export default Board;