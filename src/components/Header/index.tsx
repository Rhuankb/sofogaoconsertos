import { StyledHeader } from './style';
import { AiFillInstagram } from 'react-icons/ai';
import whatsapp from '../../assets/img/whatsapp_logo.png';
import ReactWhatsapp from 'react-whatsapp';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='container'>
        <h1>Só Fogão</h1>
        <div>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/so_fogao_ltda/'
          >
            <AiFillInstagram />
          </a>
          <ReactWhatsapp src={whatsapp} element='img' number='555192146069' />
        </div>
      </div>
    </StyledHeader>
  );
};
