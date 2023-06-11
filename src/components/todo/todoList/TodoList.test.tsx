import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import TodoList from './TodoList'
import { ITodo } from 'interfaces/todo'
import store from 'store/index'

const todos: ITodo[] = [
	{
		id: 1,
		completed: false,
		description: 'hello',
	},
	{
		id: 2,
		completed: false,
		description: 'by',
	},
	{
		id: 3,
		completed: false,
		description: 'to',
	},
]

describe('List component', () => {
	test('List renders', () => {
		render(
			<Provider store={store}>
				<TodoList todos={todos} />
			</Provider>
		)

		expect(screen.getByRole('list')).toBeInTheDocument()
		expect(screen.getByText('by')).toBeInTheDocument()
	})

	test('List renders without data', () => {
		render(
			<Provider store={store}>
				<TodoList todos={[]} />
			</Provider>
		)

		expect(screen.queryByRole('list')).toBeNull()
	})
	test('List snapshot', () => {
		const list = render(
			<Provider store={store}>
				<TodoList todos={todos} />
			</Provider>
		)

		expect(list).toMatchSnapshot()
	})
})
