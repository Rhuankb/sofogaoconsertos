import img from '../../../../assets/img/img1.jpg';
import { StyledInfo } from './style';
import logo from '../../../../assets/img/logo.png';
import ReactWhatsapp from 'react-whatsapp';

export const Info = () => {
  return (
    <StyledInfo>
      <div className='container'>
        <img className='info-img' src={img} alt='' />
        <div>
          <img className='logo' src={logo} alt='' />
          <h2>
            Conserto de fogão em Porto Alegre, comerciais, industriais e
            residenciais de <span>todas as marcas e modelos</span>
          </h2>
          <ReactWhatsapp element='button' number='555192146069'>
            {'AGENDE AGORA'}
          </ReactWhatsapp>
        </div>
      </div>
    </StyledInfo>
  );
};
