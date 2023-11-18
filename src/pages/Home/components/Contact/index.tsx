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
            <p><a href="tel:+5133171755">(51) 3317-1755</a></p>
            <p><a href="tel:+51991457915">(51) 99145-7915</a></p>
          </div>
          <div>
            <p><a href='mailto:sofogaoconsertos@hotmail.com'>SOFOGAOCONSERTOS@HOTMAIL.COM</a></p>
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
