import React from 'react';
import './CepResult.css';

interface CepResultProps {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}

const CepResult: React.FC<CepResultProps> = ({ cep, state, city, neighborhood, street, service }) => {
  return (
    <div className="cep-result">
      <div className="cep-result__item">
        <span className="cep-result__label">CEP:</span>
        <span className="cep-result__value">{cep}</span>
      </div>
      <div className="cep-result__item">
        <span className="cep-result__label">Estado:</span>
        <span className="cep-result__value">{state}</span>
      </div>
      <div className="cep-result__item">
        <span className="cep-result__label">Cidade:</span>
        <span className="cep-result__value">{city}</span>
      </div>
      <div className="cep-result__item">
        <span className="cep-result__label">Bairro:</span>
        <span className="cep-result__value">{neighborhood}</span>
      </div>
      <div className="cep-result__item">
        <span className="cep-result__label">Rua:</span>
        <span className="cep-result__value">{street}</span>
      </div>
      <div className="cep-result__item">
        <span className="cep-result__label">Serviço:</span>
        <span className="cep-result__value">{service}</span>
      </div>
    </div>
  );
};

export default CepResult;
