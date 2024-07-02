import React, { useState } from 'react';
import '../styles/ProposalModal.css'

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const proposal = {
      organizationId: 1,
      title,
      description,
    };

    try {
      const response = await fetch('https://84bc-95-12-113-153.ngrok-free.app/web/createProposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proposal),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        console.log('Proposal sent successfully');
      } else {
        console.error('Network response was not ok', response.statusText);
        console.log('Proposal not sent');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Proposal not sent');
    }
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Proposal</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <textarea
              rows={2}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposalModal;
