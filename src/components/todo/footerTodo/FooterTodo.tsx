import React, { memo } from 'react'
import styles from './FooterTodo.module.scss'
import { classNames } from 'utils/classNames/classNames'
import { footerActions } from './footerActions'
import { useSearchParams } from 'react-router-dom'
import { SORT_PARAM } from 'config/config'
import useActions from 'hooks/useActions'

interface IFooterTodo {
	count: number
}

const FooterTodo = ({ count }: IFooterTodo) => {
	const { clearCompletedTodos } = useActions()

	const [searchParams, setSearchParams] = useSearchParams()
	const sortParam = searchParams.get(SORT_PARAM)

	function onChangeParam(value: string) {
		searchParams.set(SORT_PARAM, value)
		setSearchParams(searchParams)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.count}>
				<p className={styles.count__text}>{count} items</p>
			</div>
			<ul className={styles.actions}>
				{footerActions.map(({ id, title }) => {
					return (
						<li
							className={
								sortParam === title
									? classNames([styles.action, styles.action__active])
									: styles.action
							}
							key={id}
							onClick={() => onChangeParam(title)}
						>
							{title}
						</li>
					)
				})}
			</ul>
			<div onClick={() => clearCompletedTodos()} className={styles.clear}>
				<p className={styles.clear__text}>Clear completed</p>
			</div>
		</div>
	)
}

export default memo(FooterTodo)
