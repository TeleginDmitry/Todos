import React, { Fragment } from 'react'
import styles from './TodoList.module.scss'
import TodoItem from './todoItem/TodoItem'
import { ITodo } from 'interfaces/todo'

interface ITodoList {
	todos: ITodo[]
}

const TodoList = ({ todos }: ITodoList) => {

	if (!todos.length) return null
	
	return (
		<ul className={styles.wrapper}>
			{todos.map(todo => {
				return (
					<Fragment key={todo.id}>
						<TodoItem todo={todo}></TodoItem>
					</Fragment>
				)
			})}
		</ul>
	)
}

export default TodoList
