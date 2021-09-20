import * as types from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todos: [
    {
      id: 1,
      task: { taskName: 'Develop frontend', dueDate: new Date().toString() },
      completed: false,
    },
  ],
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      }

      const addedTodo = [...state.todos, newTodo]
      return {
        ...state,
        todos: addedTodo,
      }
    case types.UPDATE_TODO:
      const updatedTodo = state.todos.map(el => {
        if (el.id === action.payload.id) {
          return { ...el, task: action.payload.updatedTask }
        }
        return el
      })

      return {
        ...state,
        todos: updatedTodo,
      }
    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map(el =>
        el.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.completed }
          : el
      )
      return {
        ...state,
        todos: toggleTodos,
      }

    case types.REMOVE_TODO:
      const filterTodo = state.todos.filter(el => el.id !== action.payload.id)

      return {
        ...state,
        todos: filterTodo,
      }

    default:
      return state
  }
}

export default todosReducer
