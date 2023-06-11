import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from 'interfaces/todo'

interface IInitialState {
	todos: ITodo[]
}

const initialState: IInitialState = {
	todos: [],
}

const TodosSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload)
		},
		completeTodo: (state, action: PayloadAction<number>) => {
			const todo = state.todos.find(({ id }) => id === action.payload)

			if (todo !== undefined) {
				todo.completed = !todo.completed
			}
		},
		clearCompletedTodos: state => {
			state.todos = state.todos.filter(todo => !todo.completed)
		},
	},
})

export const { addTodo, completeTodo, clearCompletedTodos } = TodosSlice.actions

export default TodosSlice.reducer
