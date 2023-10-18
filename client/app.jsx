import React, {useState} from "react";
import Icon from '@mdi/react';
import { mdiDeleteForever, mdiPlusBox } from '@mdi/js';
import "./app.css";


export function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };
    /*const handleDoneTask = (index) => {
        setChecked(!isChecked);


    }*/
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);};

    return (<>
        <header>
            <h1>To-Do Liste</h1>
        </header>
        <main>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={handleAddTask}><Icon path={mdiPlusBox} size={1} /></button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox"/>
                        {task}
                        <button onClick={() => handleDeleteTask(index)} >
                            <Icon path={mdiDeleteForever} size={0.5}/>
                        </button>
                    </li>))}
            </ul>
        </main>
        <footer>
            Laget av Kirsti og Sander 🤤
        </footer>
    </>)
}