import React, { useState, useEffect } from 'react';
import '../styles/MyProposals.css';

interface Proposal {
  proposal_uuid: string;
  title: string;
  description: string;
}

const MyProposals: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch('https://84bc-95-12-113-153.ngrok-free.app/web/createProposal', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Log the raw response text to understand the issue
        const text = await response.text();
        console.log('Response text:', text);

        // Attempt to parse the response text as JSON
        try {
          const data = JSON.parse(text);
          console.log('Parsed JSON data:', data);
          setProposals(data);
        } catch (jsonError) {
          console.error('Failed to parse JSON:', jsonError);
          throw new Error('Failed to parse JSON');
        }

      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="proposals-container">
      <h2>My Proposals</h2>
      <ul className="proposals-list">
        {proposals.map((proposal) => (
          <li key={proposal.proposal_uuid} className="proposal-item">
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProposals;
