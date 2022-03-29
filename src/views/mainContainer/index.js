import React from 'react'
import { Route, Navigate } from 'react-router-dom'

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
		<>
			{routes.map((route) =>
				route.component ? (
					<Route
						key={route.name}
						path={route.path}
						exact={route.exact}
						name={route.name}
						element={<route.component />}
					/>
				) : (
					route.redirectRoute && (
						<Route
							path={route.path}
							key={route.name}
							element={<Navigate to="/" />}
						/>
					)
				),
			)}
		</>
	)
}

export default MainContainer
