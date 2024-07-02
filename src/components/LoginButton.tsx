import React, { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import ProposalModal from './ProposalModal';

const LoginButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const idToken = credentialResponse.credential; // Google token alınır
      const response = await fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + idToken);
      const userData = await response.json();
      
      const email = userData.email;

      
      await fetch('https://84bc-95-12-113-153.ngrok-free.app/web/getProposalFromGmail', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during login or email saving:', error);
    }
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  const handleCreateProposalClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="GoogleLoginWrapper">
      {isLoggedIn ? (
        <>
          <button className="proposalButton" onClick={handleCreateProposalClick}>
            Create Proposal
          </button>
          <ProposalModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      )}
    </div>
  );
};

export default LoginButton;
