import useActions from 'hooks/useActions'
import React, { memo, useState } from 'react'
import createTodo from 'utils/createTodo'
import styles from './TodoForm.module.scss'

const TodoForm = () => {
	const { addTodo } = useActions()

	const [description, setDescription] = useState('')

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const description = event.target.value
		setDescription(description)
	}

	function onCreateTodo(description: string) {
		if (description) {
			const todo = createTodo(description)

			addTodo(todo)
			setDescription('')
		}
	}

	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				onChange={onChange}
				type='text'
				value={description}
				placeholder='Попробуйте создать несколько дел'
			/>
			<button
				className={styles.button}
				onClick={() => onCreateTodo(description)}
			>
				Создать
			</button>
		</div>
	)
}

export default memo(TodoForm)
