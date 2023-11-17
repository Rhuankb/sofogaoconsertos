import React from 'react';
import { StyledContact } from './style';
import banner from '../../../../assets/img/bannerwhats.png';
import ReactWhatsapp from 'react-whatsapp';

export const Contact = () => {
  return (
    <StyledContact>
      <ReactWhatsapp src={banner} loading='lazy' width="auto" height="100%" element='img' number='555192146069' alt='banner com a imagem de uma mulher tomando café' />
      <div className='container'>
        <div>
          <div>
            <h2>Horário de funcionamento</h2>
            <h2>SEGUNDA - SEXTA: 07:30 - 18:00</h2>
          </div>
          <div className='phone'>
            <p>(51) 3317-1755</p>
            <p>(51) 99145-7915</p>
          </div>
          <div>
            <p>SOFOGAOCONSERTOS@HOTMAIL.COM</p>
            <p>
              Estr. João de Oliveira Remião, 930, 507 - Agronomia, Porto Alegre
              - RS, 91550-000
            </p>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};
