import React from 'react'
import styles from './TodoItem.module.scss'
import { ITodo } from 'interfaces/todo'
import useActions from 'hooks/useActions'
import { classNames as cn } from 'utils/classNames/classNames'

interface ITodoItem {
	todo: ITodo
}

const TodoItem = ({ todo }: ITodoItem) => {
	const { completed, description, id } = todo

	const { completeTodo } = useActions()

	function onComplete(id: number) {
		completeTodo(id)
	}

	return (
		<li className={styles.wrapper}>
			<input
				onChange={() => onComplete(id)}
				className={styles.checkbox}
				checked={completed}
				type='checkbox'
			/>
			<p className={completed ? cn([styles.description, styles.description__reset]) : styles.description}>{description}</p>
		</li>
	)
}

export default TodoItem
