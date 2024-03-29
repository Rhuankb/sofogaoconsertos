import React from 'react';
import { StyledBrands } from './style';
import marca1 from '../../../../assets/img/marca1.svg';
import marca2 from '../../../../assets/img/marca2.svg';
import marca3 from '../../../../assets/img/marca3.svg';
import marca4 from '../../../../assets/img/marca4.svg';
import marca5 from '../../../../assets/img/marca5.svg';
import marca6 from '../../../../assets/img/marca6.svg';
import marca7 from '../../../../assets/img/marca7.svg';
import marca8 from '../../../../assets/img/marca8.svg';
import marca9 from '../../../../assets/img/marca9.svg';
import marca10 from '../../../../assets/img/marca10.svg';

export const Brands = () => {
  return (
    <StyledBrands>
      <div className='container'>
        <h2>Trabalhamos com as marcas:</h2>
        <ul>
          <li>
            <img src={marca1} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca2} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca3} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca4} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca5} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca6} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca7} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca8} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca9} loading='lazy' alt='' />
          </li>
          <li>
            <img src={marca10} loading='lazy' alt='' />
          </li>
        </ul>
      </div>
    </StyledBrands>
  );
};
