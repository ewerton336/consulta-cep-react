import React, { ChangeEvent, FormEvent, useState } from 'react';
import './CepInput.css';
import CepResult from '../CepResult/CepResult';

interface CepData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

interface CepInputProps {
  value: string;
  onChange: (value: string) => void;
}

const formatCep = (cep: string) => {
  if (cep.length === 8) {
    return `${cep.substr(0, 2)}.${cep.substr(2, 3)}-${cep.substr(5, 3)}`;
  }
  return cep;
};

const CepInput: React.FC<CepInputProps> = ({ value, onChange }) => {
  const [cep, setCep] = useState(value);
  const [result, setResult] = useState<CepData | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    setCep(inputValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Consultar a API utilizando o CEP
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .then((response) => response.json())
      .then((data: CepData) => {
        setResult(data);
      })
      .catch((error) => {
        console.error('Erro na consulta da API:', error);
      });
  };

  return (
    <div className="cep-input-container">
      <form className="cep-input-form" onSubmit={handleSubmit}>
        <input
          className="cep-input"
          type="text"
          value={formatCep(cep)}
          maxLength={10}
          onChange={handleChange}
          placeholder="Digite o CEP"
        />
        <button className="botao-enviar" type="submit">Consultar</button>
      </form>
      {result && (
        <CepResult
          cep={result.cep}
          state={result.state}
          city={result.city}
          neighborhood={result.neighborhood}
          street={result.street}
          service={result.service}
        />
      )}
    </div>
  );
};

export default CepInput;
