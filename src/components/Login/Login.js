import React, { useContext, useEffect, useReducer, useState } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'

const emailReducer = (prevState, action) => {
	if (action.type === 'USER_EMAIL') {
		return {
			value: action.val,
			isValid: action.val.includes('@'),
		}
	}
	if (action.type === 'EMAIL_BLUR') {
		return {
			value: prevState.value,
			isValid: prevState.value.includes('@'),
		}
	}
	return {
		value: '',
		isValid: false,
	}
}

const passwordReducer = (prevState, action) => {
	if (action.type === 'USER_PASSWORD') {
		return {
			value: action.val,
			isValid: action.val.trim().length > 6,
		}
	}
	if (action.type === 'PASSWORD_BLUR') {
		return {
			value: prevState.value,
			isValid: prevState.value.trim().length > 6,
		}
	}
	return {
		value: '',
		isValid: false,
	}
}

// Компонент Login для аутинтификации пользователя
const Login = () => {
	// Состояния для ввода email и его валидации
	const [emailState, dispatchEmailState] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	})

	// Состояния для ввода пароля и его валидации
	const [passwordState, dispatchPasswordlState] = useReducer(
		passwordReducer,
		{
			value: '',
			isValid: false,
		},
	)

	// Состояние для проверки валидности всей формы
	const [formIsValid, setFormIsValid] = useState(false)
	const ctxData = useContext(AuthContext)

	// Обработчик изменения email
	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value)
		dispatchEmailState({ type: 'USER_EMAIL', val: event.target.value })
		// Проверка валидности формы
		setFormIsValid(
			event.target.value.includes('@') &&
				passwordState.value.trim().length > 6,
		)
	}

	//useEffect

	useEffect(() => {
		const identefier = setTimeout(() => {
			console.log('Valid !!!')
			setFormIsValid(emailState.isValid && passwordState.isValid)
		}, 3000)

		return () => {
			console.log('clear')
			clearTimeout(identefier)
		}
	}, [emailState.isValid, passwordState.isValid])

	// Обработчик изменения пароля
	const passwordChangeHandler = (event) => {
		dispatchPasswordlState({
			type: 'USER_PASSWORD',
			val: event.target.value,
		})

		// Проверка валидности формы
		setFormIsValid(
			event.target.value.trim().length > 6 &&
				emailState.value.includes('@'),
		)
	}

	// Проверка валидности email при потере фокуса
	const validateEmailHandler = () => {
		dispatchEmailState({ type: 'EMAIL_BLUR' })
	}

	// Проверка валидности пароля при потере фокуса
	const validatePasswordHandler = () => {
		dispatchPasswordlState({ type: 'PASSWORD_BLUR' })
	}

	// Обработчик отправки формы
	const submitHandler = (event) => {
		event.preventDefault()
		ctxData.onLogin()
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ''
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

// Экспорт компонента Login
export default Login
