import React, { useState } from 'react';
import '../styles/TodoInput.css'
import DatePicker from 'react-datepicker/dist/react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const TodoInput = ({ createTodo }) => {
    const [task, setTask] = useState({taskName: '', dueDate: new Date()});

    //getValues
    const handleChange = name => event => {
        const value = event.target.value
        setTask({ ...task, [name]: value })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask({taskName: '', dueDate: new Date()});
    }


    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Enter todo"
                name="task"
                id="task"
                value={task.taskName}
                onChange={handleChange('taskName')} />
            <label>Due date:</label>
            <DatePicker selected={task.dueDate} onChange={date => setTask({...task, dueDate: date})}
                dateFormat='yyyy/MM/dd'
                />
           <button style={{marginTop:"10px"}}>Add Todo</button>
             </form>
    )

}

export default TodoInput