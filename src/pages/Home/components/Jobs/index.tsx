import { StyledJobs } from './style';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fogao1 from '../../../../assets/img/fogao1.webp';
import fogao2 from '../../../../assets/img/fogao2.webp';
import fogao3 from '../../../../assets/img/fogao3.webp';
import fogao4 from '../../../../assets/img/fogao4.webp';
import fogao5 from '../../../../assets/img/fogao5.webp';
import fogao6 from '../../../../assets/img/fogao6.webp';
import fogao7 from '../../../../assets/img/fogao7.webp';
import fogao8 from '../../../../assets/img/fogao8.webp';
import fogao9 from '../../../../assets/img/fogao9.webp';
import fogao10 from '../../../../assets/img/fogao10.webp';

export const Jobs = () => {
  return (
    <StyledJobs>
      <h2>Veja alguns de nossos trabalhos de limpeza</h2>
      <Carousel
        infiniteLoop={true}
        interval={2000}
        emulateTouch={true}
        autoPlay={true}
      >
        <img src={fogao1} loading='lazy' alt='' />
        <img src={fogao2} loading='lazy' alt='' />
        <img src={fogao3} loading='lazy' alt='' />
        <img src={fogao4} loading='lazy' alt='' />
        <img src={fogao5} loading='lazy' alt='' />
        <img src={fogao6} loading='lazy' alt='' />
        <img src={fogao7} loading='lazy' alt='' />
        <img src={fogao8} loading='lazy' alt='' />
        <img src={fogao9} loading='lazy' alt='' />
        <img src={fogao10} loading='lazy' alt='' />
      </Carousel>
    </StyledJobs>
  );
};
