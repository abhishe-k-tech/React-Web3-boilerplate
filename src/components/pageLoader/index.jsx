import React from 'react'

import './pageLoader.css'

const PageLoader = ({ display }) => {
	return (
		<div
			id="loader"
			style={{
				visibility: display ? 'visible' : 'hidden',
				opacity: display ? '0.9' : '0',
			}}
		>
			<div
				className="bg-light h-100 w-100 d-flex"
				style={{ alignItems: 'center', justifyContent: 'center' }}
			>
				<div className="text-center my-auto mx-auto">
					<i
						className="fas fa-circle-notch fa-spin text-dark"
						style={{ fontSize: 40 }}
					></i>
				</div>
			</div>
		</div>
	)
}

export default PageLoader
