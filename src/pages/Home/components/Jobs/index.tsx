import { StyledJobs } from './style';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fogao1 from '../../../../assets/img/fogao1.png';
import fogao2 from '../../../../assets/img/fogao2.png';
import fogao3 from '../../../../assets/img/fogao3.png';
import fogao4 from '../../../../assets/img/fogao4.png';
import fogao5 from '../../../../assets/img/fogao5.png';
import fogao6 from '../../../../assets/img/fogao6.png';
import fogao7 from '../../../../assets/img/fogao7.png';
import fogao8 from '../../../../assets/img/fogao8.png';
import fogao9 from '../../../../assets/img/fogao9.png';
import fogao10 from '../../../../assets/img/fogao10.png';

export const Jobs = () => {
  return (
    <StyledJobs>
      <h2>Veja alguns de nossos trabalhos de limpeza</h2>
      <Carousel emulateTouch={true} autoPlay={true}>
        <img src={fogao1} alt='' />
        <img src={fogao2} alt='' />
        <img src={fogao3} alt='' />
        <img src={fogao4} alt='' />
        <img src={fogao5} alt='' />
        <img src={fogao6} alt='' />
        <img src={fogao7} alt='' />
        <img src={fogao8} alt='' />
        <img src={fogao9} alt='' />
        <img src={fogao10} alt='' />
      </Carousel>
    </StyledJobs>
  );
};
