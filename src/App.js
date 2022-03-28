import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/spinner'
function App() {
	// let mainContent = (
	// 	<>
	// 		<Route
	// 			path="/"
	// 			element={lazy(() => import('./views/mainContainer'))}
	// 		/>
	// 	</>
	// )
	const Home = lazy(() => import('./views/login'))
	return (
		<Router>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
