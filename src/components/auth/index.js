import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function PrivateRoute() {
	const { auth, setAuth } = useAuth()
	const location = useLocation()
	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (token) setAuth({ token })
	}, [])

	return auth && auth ? (
		<Outlet />
	) : (
		<Navigate to={'/'} state={{ from: location }} replace />
	)
}

export default PrivateRoute
