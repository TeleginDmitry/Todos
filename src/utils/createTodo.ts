import { ITodo } from 'interfaces/todo'

export default function createTodo(description: string) {
	const todo: ITodo = {
		id: Math.random(),
		completed: false,
		description,
	}

	return todo
}
