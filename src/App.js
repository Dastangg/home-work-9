import React, { useEffect, useState } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'


function App() {
	// Использую useState для авторизации
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	// Проверяю, есть ли в локальном хранилище инфа о входе
	useEffect(() => {
		const userIsLoggedInfo = localStorage.getItem('isLoggedIn')
		if (userIsLoggedInfo === 'hello') {
			setIsLoggedIn(true) // Если да, то идет авторизация
		}
	}, [])


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
    //Группирую элементы без лишних div
    //Передаю в шапку данные
    //Если не залогинен — показываю Login
    // Если залогинен — показываю Home
		<React.Fragment> 
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</React.Fragment>
	)
}
// Экспортирую компонент App
export default App



