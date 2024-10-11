import React from 'react';

const Task = (props) => {
    const getPriorityColor = (priority) => {
        switch(priority) {
          case "High":
            return "red";
          case "Medium":
            return "orange";
          case "Low":
            return "green";
          default:
            return "#5bb4c4";
        }
      };

    return (
      <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p style={{ backgroundColor: getPriorityColor(props.priority) }}>{props.priority}</p> 
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
      </div>
    );
  }
  
  export default Task;
