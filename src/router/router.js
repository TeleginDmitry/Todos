import { createBrowserRouter } from 'react-router-dom'
import { Todos } from 'pages/index'

export const router = createBrowserRouter([
	{
		path: '/*',
		element: <Todos></Todos>,
	},
])
