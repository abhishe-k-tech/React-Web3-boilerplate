// import MetaMaskOnboarding from '@metamask/onboarding'
// import { useWeb3React } from '@web3-react/core'
import { Link } from "react-router-dom";
import MetamaskButton from "../../components/buttons/metaMaskButton";
const ONBOARD_TEXT = "Click to install MetaMask!";
// const CONNECT_TEXT = 'Connect Metamask'

const Login = () => {
  // const [metamaskButtonText, setMetamaskButtonText] = useState(ONBOARD_TEXT)
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
      <Link to="/redux-example">Redux_Example</Link>
    </div>
  );
};

export default Login;
