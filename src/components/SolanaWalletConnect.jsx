import { useState, useEffect } from 'react';
import * as web3 from '@solana/web3.js';

const SolanaWalletConnect = () => {
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    // Check if the Solana wallet is installed
    if (window.solana && window.solana.isPhantom) {
      console.log('Phantom wallet found!');
      window.solana.connect({ onlyIfTrusted: true })
        .then((resp) => {
          setAddress(resp.publicKey.toString());
        })
        .catch((err) => console.error('Failed to connect automatically', err));
    } else {
      alert('Solana wallet (e.g., Phantom) not found! Please install it to use this feature.');
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (window.solana) {
        const resp = await window.solana.connect();
        const walletAddress = resp.publicKey.toString();
        setAddress(walletAddress);

        const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
        const walletBalance = await connection.getBalance(new web3.PublicKey(walletAddress));
        setBalance(walletBalance / web3.LAMPORTS_PER_SOL); // Convert lamports to SOL
      } else {
        alert('Please install a Solana wallet like Phantom to use this feature.');
      }
    } catch (err) {
      console.error("Error connecting to Solana wallet:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button className="btn btn-primary" onClick={connectWallet}>
        Connect Solana Wallet
      </button>
      {address && (
        <div className="mt-4">
          <p>Address: {address}</p>
          <p>Balance: {balance} SOL</p>
        </div>
      )}
    </div>
  );
};

export default SolanaWalletConnect;
