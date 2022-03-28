import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { userRoutes, guestRoutes } from '../../routes/mainRoutes/mainRoutes'
// import PrivateRoute from '../../components/auth'
const MainContainer = () => {
	const auth = JSON.parse(localStorage.getItem('auth'))
	// const role = userData.designation for role base login
	let routes = ''

	switch (auth) {
		case true:
			routes = userRoutes
			break
		default:
			routes = guestRoutes
	}
	return (
		<Routes>
			{routes.map((route) =>
				route.element ? (
					<Route
						key={route.name}
						path={route.path}
						exact={route.exact}
						name={route.name}
						element={route.element}
					/>
				) : (
					route.redirectRoute && (
						<Navigate key={route.name} to={route.path} />
					)
				),
			)}
		</Routes>
	)
}

export default MainContainer
