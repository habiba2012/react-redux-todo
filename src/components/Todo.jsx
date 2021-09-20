import React, { useState } from 'react'
import '../styles/Todo.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Todo = ({
  toggleTodo,
  task,
  due,
  completed,
  id,
  removeTodo,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTask, setEditTask] = useState({ taskName: task, dueDate: due })

  const handleUpdate = e => {
    e.preventDefault()
    updateTodo(id, editTask)
    setIsEditing(false)
  }
  
  return (
    <TransitionGroup className={completed ? 'Todo completed' : 'Todo'}>
      {isEditing ? (
        <CSSTransition key='editing' timeout={500} className='form'>
          <form className='Todo-edit-form' onSubmit={handleUpdate}>
            <input
              type='text'
              name='task'
              value={editTask.taskName}
              onChange={e =>
                setEditTask({ ...editTask, taskName: e.target.value })
              }
            />
            <button>Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key='normal' timeout={500} className='task-text'>
          <li className='Todo-task' onClick={toggleTodo}>
            {task} <br />
            <span>{due?.toString()}</span>
         
          </li>
        </CSSTransition>
      )}

      <div className='Todo-buttons'>
        <button onClick={() => setIsEditing(true)}>
          <i className='fas fa-pen' />
        </button>
        <button onClick={removeTodo}>
          <i className='fas fa-trash' />
        </button>
      </div>
    </TransitionGroup>
  )
}

export default Todo
