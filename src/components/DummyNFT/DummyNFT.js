import React from 'react'
import { Button } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'

// import { useColorContract } from "../../hooks";

const DummyNFT = () => {
	const { deactivate } = useWeb3React()

	const onLogoutClick = () => {
		localStorage.setItem('shouldEagerConnect', false)
		deactivate()
	}

	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="logout">
					<Button onClick={onLogoutClick}>LOGOUT</Button>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default DummyNFT
