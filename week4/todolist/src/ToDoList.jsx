import { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== '') {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask('');
        }
  
    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return (
        <div className="to-do-list">

            <h1>To Do List</h1>

            <div>
                <input 
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleInputChange}
                />
                <button className='add-btn' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-btn' onClick={() => deleteTask(index)}>🗑️</button>
                        <button className='move-up-btn' onClick={() => moveTaskUp(index)}>☝🏻</button>
                        <button className='move-down-btn' onClick={() => moveTaskDown(index)}>👇🏻</button>
                    </li>
                ))}
            </ol>

        </div>
    )
}

export default ToDoList;