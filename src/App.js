import React, { useContext } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'


function App() {
	const ctxData = useContext(AuthContext)

	return (
    //Группирую элементы без лишних div
    //Передаю в шапку данные
    //Если не залогинен — показываю Login
    // Если залогинен — показываю Home
		<> 
			<MainHeader />
			<main>
				{!ctxData.isLoggedIn && <Login />}
				{ctxData.isLoggedIn && <Home />}
			</main>
		</>
	)
}
// Экспортирую компонент App
export default App



