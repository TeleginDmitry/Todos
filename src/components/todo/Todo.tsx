import React, { useState, useEffect } from 'react'
import TodoList from './todoList/TodoList'
import TodoForm from './todoForm/TodoForm'
import styles from './Todo.module.scss'
import FooterTodo from './footerTodo/FooterTodo'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useSearchParams } from 'react-router-dom'
import { SORT_PARAM } from 'config/config'
import { VALUE_ACTIVE, VALUE_COMPLETED } from 'config/config'

function Todo() {
	const todos = useTypedSelector(state => state.todos.todos)

	const [todoList, setTodoList] = useState(todos)

	const [searchParams, setSearchParams] = useSearchParams()

	const sortParam = searchParams.get(SORT_PARAM)

	function selectTodos() {
		setTodoList(() => todos)
	}

	function selectCompletedTodos() {
		setTodoList(() => todos.filter(todo => todo.completed))
	}

	function selectIncompleteTodos() {
		setTodoList(() => todos.filter(todo => !todo.completed))
	}

	useEffect(() => {
		sortParam === VALUE_ACTIVE
			? selectIncompleteTodos()
			: sortParam === VALUE_COMPLETED
			? selectCompletedTodos()
			: selectTodos()
	}, [sortParam, todos])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<TodoForm></TodoForm>
				<TodoList todos={todoList}></TodoList>
				<FooterTodo count={todoList.length}></FooterTodo>
			</div>
		</div>
	)
}

export default Todo
