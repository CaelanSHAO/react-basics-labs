import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", priority:"Low",completed:false,description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", priority:"Medium",completed:false,description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", priority:"High",completed:false,deadline: "Today", done: false}
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;

      case "priority":
          form.priority = event.target.value;  // 处理优先级
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  console.log(formState);

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}  // 添加优先级
        key={task.id}
        done={task.done}
        markDone={() => doneHandler(index)}
        deleteTask={() => deleteHandler(index)}
      />
      
      ))}
       <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
    
  );
}

export default App;
