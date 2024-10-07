import React from 'react';

const Task = (props) => {
   
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="title2">{props.children}</p>

        </div>
    )

    
}

export default Task;