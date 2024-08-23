import { useState } from 'react';
import { ethers } from "ethers";

const EtherWalletConnect = () => {
    const [balance, setBalance] = useState(null);
    const [address, setAddress] = useState(null);

    const connectWallet = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                await provider.send("eth_requestAccounts", []);
                const userAddress = await signer.getAddress();
                const userBalance = await provider.getBalance(userAddress);
                setAddress(userAddress);
                setBalance(ethers.formatEther(userBalance));
            } else {
                alert('Please install MetaMask to use this feature!');
            }
        } catch (error) {
            console.error("Failed to connect to wallet", error);
            alert('Failed to connect to wallet. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <button className="btn btn-primary" onClick={connectWallet}>
                Connect Wallet
            </button>
            {address && (
                <div className="mt-4 text-white">
                    <p>Address: {address}</p>
                    <p>Balance: {balance} ETH</p>
                </div>
            )}
        </div>
    );
};

export default EtherWalletConnect;
