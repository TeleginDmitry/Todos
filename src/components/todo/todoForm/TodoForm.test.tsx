import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TodoForm from './TodoForm'
import { Provider } from 'react-redux'
import store from 'store/index'

describe('TodoForm', () => {
	test('should render input and button', () => {
		const { getByPlaceholderText, getByText } = render(
			<Provider store={store}>
				<TodoForm />
			</Provider>
		)
		const inputElement = getByPlaceholderText(
			'Попробуйте создать несколько дел'
		)
		const buttonElement = getByText('Создать')

		expect(inputElement).toBeInTheDocument()
		expect(buttonElement).toBeInTheDocument()
	})

	test('should update input value on change', () => {
		const { getByPlaceholderText } = render(
			<Provider store={store}>
				<TodoForm />
			</Provider>
		)
		const inputElement = getByPlaceholderText(
			'Попробуйте создать несколько дел'
		) as HTMLInputElement

		fireEvent.change(inputElement, { target: { value: 'New Todo' } })

		expect(inputElement.value).toBe('New Todo')
	})
})
