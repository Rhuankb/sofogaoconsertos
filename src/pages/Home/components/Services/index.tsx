import React from 'react';
import { StyledServices } from './style';
import conserto from '../../../../assets/img/conserto.webp';
import install from '../../../../assets/img/install.webp';
import revision from '../../../../assets/img/revision.webp';
import trocas from '../../../../assets/img/trocas.webp';
import ReactWhatsapp from 'react-whatsapp';

export const Services = () => {
  return (
    <StyledServices>
      <div className='container'>
        <h2>Conheça nossos principais serviços</h2>
        <ul>
          <li>
            <img src={conserto} loading='lazy' alt='' />
            <p>CONSERTOS</p>
          </li>
          <li>
            <img src={install} loading='lazy' alt='' />
            <p>INSTALAÇÕES</p>
          </li>
          <li>
            <img src={revision} loading='lazy' alt='' />
            <p>REVISÕES</p>
          </li>
          <li>
            <img src={trocas} loading='lazy' alt='' />
            <p>TROCAS GLP e GÁS NATURAL</p>
          </li>
        </ul>
        <h3>Atendimento Residencial, Comercial e Industrial</h3>
        <ReactWhatsapp element='button' number='555192146069'>
          {'Saiba mais'}
        </ReactWhatsapp>
      </div>
    </StyledServices>
  );
};
