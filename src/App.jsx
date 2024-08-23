import logo from '../public/logo.jpeg'
import EtherWalletConnect from './components/EtherWalletConnect'; // Ethereum Wallet
import SolanaWalletConnect from './components/SolanaWalletConnect'; // Solana Wallet

const App = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
      <img src={logo} alt="Logo" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-center">Crypto Wallet Connect</h1>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Ethereum Wallet Connect */}
        <div className="card w-72 sm:w-96 glass shadow-xl p-4 ">
          <h2 className="text-2xl font-semibold mb-4">Ethereum Wallet</h2>
          <EtherWalletConnect />
        </div>

        {/* Solana Wallet Connect */}
        <div className="card w-72 sm:w-96 glass shadow-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Solana Wallet</h2>
          <SolanaWalletConnect />
        </div>
      </div>
    </div>
  );
};

export default App;
