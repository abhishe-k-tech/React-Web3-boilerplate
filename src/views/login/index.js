import React from 'react'
// import MetaMaskOnboarding from '@metamask/onboarding'
// import { useWeb3React } from '@web3-react/core'
import MetamaskButton from '../../components/buttons/metaMaskButton'
const ONBOARD_TEXT = 'Click to install MetaMask!'
// const CONNECT_TEXT = 'Connect Metamask'

const Login = () => {
	// const [metamaskButtonText, setMetamaskButtonText] = useState(ONBOARD_TEXT)
	console.log('XXXXX')
	return (
		<div className="wallet-wrapper">
			<MetamaskButton
				title={ONBOARD_TEXT}
				// onMetamaskClick={onConnectWithMetamaskClick}
			/>
			{/* <WalletConnect
				onWalletConnectClick={onConnectWithWalletConnectClick}
			/>
			<WalletLinkConnect onWalletLinkConnectClick={onLinkConnectClick} />
			<Fortmatic
				title="Fortmatic"
				onFortmaticClick={onConnectWithFortmaticClick}
			/> */}
		</div>
	)
}

export default Login
