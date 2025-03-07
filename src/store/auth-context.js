import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
	isLoggedIn: false,
	isLoggout: () => {},
	onLogin: () => {},
})

export const AuthContextProviderComponent = (props) => {
	// Использую useState для авторизации
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	// Проверяю, есть ли в локальном хранилище инфа о входе
	useEffect(() => {
		const userIsLoggedInfo = localStorage.getItem('isLoggedIn')
		if (userIsLoggedInfo === 'hello') {
			setIsLoggedIn(true) // Если да, то идет авторизация
		}
	}, [] )

	// Функция входа
	const loginHandler = (email, password) => {
		localStorage.setItem('isLoggedIn', 'hello') // Записываю в localStorage
		setIsLoggedIn(true) // Обновляю состояние
	}

	// Функция выхода
	const logoutHandler = () => {
		setIsLoggedIn(false) // Сбрасываю авторизацию
		localStorage.removeItem('isLoggedIn') // Удаляю из localStorage
	}
	return (
		<AuthContext.Provider>
			value=
			{{
				isLoggedIn: isLoggedIn,
				isLoggout: logoutHandler,
				onLogin: loginHandler,
			}}
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
