import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import CepInput from './Components/CepInput/CepInput';

function App() {
  const [cep, setCep] = useState('');

  const handleCepChange = (value: string) => {
    setCep(value);
  };

  return (
    <div className={`App ${cep ? 'dark-background' : ''}`}>
   <Router>
        <Navbar />
      </Router>
      <header className="App-header">
        <h3> Consulta de CEP</h3>
      <CepInput value={cep} onChange={handleCepChange} />
      </header>
    </div>
  );
}

export default App;
