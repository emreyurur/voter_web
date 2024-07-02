import React from 'react';
import './App.css';
import daoLogo from './assets/dao_logo.png';
import LoginButton from './components/LoginButton';
import WalletLogin from './components/WalletLogin';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import MyProposals from './pages/MyProposals';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="centeredContent">
        <Routes>
          <Route path="/" element={
            <>
              <img src={daoLogo} alt="DAO Logo" className="daoLogo" />
              <div className="loginContainer">
                <LoginButton />
                <WalletLogin />
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/my-proposals" element={<MyProposals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
