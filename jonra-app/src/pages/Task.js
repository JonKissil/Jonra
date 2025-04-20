import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./task-style.css";

// props are: name, description, priority, status

export const Task = props => {
    const { name } = useParams();
    const { boardId, taskName, description, priority, status } = props;

    return (
        <div className="task-card">
            <h2 className="task-title">{taskName}</h2>
            <div className="task-divider"></div>
            <div className="task-details">
                <p><strong>Description:</strong> {description ? description : "None"}</p>
                <p><strong>Priority:</strong> {priority}</p>
                <p><strong>Status:</strong> {status}</p>
            </div>
            {props.children}
        </div>
    );
}
