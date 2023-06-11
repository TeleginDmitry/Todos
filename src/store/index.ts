import { configureStore } from '@reduxjs/toolkit'
import TodosSlice from './todos/todos.slice'

const store = configureStore({
	reducer: {
		todos: TodosSlice,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
