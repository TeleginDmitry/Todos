import Todo from 'components/todo/Todo'
import useChangingTitlePage from 'hooks/useChangingTitlePage'
import React from 'react'

const Todos = () => {
	useChangingTitlePage('Список дел')

	return <Todo></Todo>
}

export default Todos
