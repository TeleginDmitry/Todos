import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FooterTodo from './FooterTodo'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'store/index'

describe('FooterTodo', () => {
	it('should render count, actions, and clear button', () => {
		const count = 5
		const { getByText, getAllByRole } = render(
			<Provider store={store}>
				<Router>
					<FooterTodo count={count} />
				</Router>
			</Provider>
		)

		const countElement = getByText(`${count} items`)
		expect(countElement).toBeInTheDocument()

		const actionElements = getAllByRole('listitem')
		expect(actionElements).toHaveLength(3)

		const clearButton = getByText('Clear completed')
		expect(clearButton).toBeInTheDocument()
	})
})
