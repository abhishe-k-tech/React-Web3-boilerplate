import React from 'react'
export const userRoutes = [
	{
		path: '/dashboard',
		exact: true,
		name: 'Dashboard',
		element: React.lazy(() => import('../../views/dashboard')),
	},
	{
		redirectRoute: true,
		name: 'homePage',
		path: '/',
	},
]
export const guestRoutes = [
	{
		exact: true,
		path: '/',
		name: 'homePage',
		element: React.lazy(() => import('../../views/login')),
	},
]
