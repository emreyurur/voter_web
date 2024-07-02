import React, { useState } from 'react';
import ProposalModal from './ProposalModal';
import '../styles/WalletLogin.css';
import walletIcon from '../assets/phantom_circle_icon.png';

const WalletLogin: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectWallet = async () => {
    try {
      if ('solana' in window) {
        const provider = (window as any).solana;
        if (provider.isPhantom) {
          const response = await provider.connect();
          const publicKey = response.publicKey.toString();
          setWalletAddress(publicKey);
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (err) {
      console.error('Error connecting to wallet:', err);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="WalletLoginWrapper">
      {walletAddress ? (
        <>
          <button className="proposalButton" onClick={handleOpenModal}>
            Create Proposal
          </button>
          <ProposalModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
      ) : (
        <button className="walletButton" onClick={connectWallet}>
          <img src={walletIcon} alt="Wallet Icon" className="walletIcon" />
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletLogin;
