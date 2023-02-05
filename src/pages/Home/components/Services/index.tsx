import React from 'react';
import { StyledServices } from './style';
import conserto from '../../../../assets/img/conserto.jpg';
import install from '../../../../assets/img/install.jpeg';
import revision from '../../../../assets/img/revision.jpg';
import trocas from '../../../../assets/img/trocas.jpg';

export const Services = () => {
  return (
    <StyledServices>
      <div className='container'>
        <h2>Conheça nossos principais serviços</h2>
        <ul>
          <li>
            <img src={conserto} alt='' />
            <p>CONSERTOS</p>
          </li>
          <li>
            <img src={install} alt='' />
            <p>INSTALAÇÕES</p>
          </li>
          <li>
            <img src={revision} alt='' />
            <p>REVISÕES</p>
          </li>
          <li>
            <img src={trocas} alt='' />
            <p>TROCAS GLP e GÁS NATURAL</p>
          </li>
        </ul>
        <h3>Atendimento Residencial, Comercial e Industrial</h3>
        <button>Saiba Mais</button>
      </div>
    </StyledServices>
  );
};
