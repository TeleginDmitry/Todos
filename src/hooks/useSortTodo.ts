import { ITodo } from 'interfaces/todo'
import { useState } from 'react'

interface ISortTodo {
	todos: ITodo[]
}

export const useSortTodo = ({ todos }: ISortTodo) => {
	const [todoList, setTodoList] = useState(todos)

	function selectTodos() {
		setTodoList(() => todos)
	}

	function selectCompletedTodos() {
		setTodoList(() => todos.filter(todo => todo.completed))
	}

	function selectIncompleteTodos() {
		setTodoList(() => todos.filter(todo => !todo.completed))
	}

	return { todoList, selectTodos, selectCompletedTodos, selectIncompleteTodos }
}
