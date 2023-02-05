import React from 'react';
import { Header } from '../../components/Header';
import { Brands } from './components/Brands';
import { Contact } from './components/Contact';
import { Info } from './components/Info';
import { Services } from './components/Services';
import { Fade } from 'react-awesome-reveal';
import 'intersection-observer';
import { Jobs } from './components/Jobs';

export const Home = () => {
  return (
    <>
      <Fade direction='down' triggerOnce>
        <Header />
      </Fade>
      <Fade triggerOnce damping={0.5}>
        <Info />
      </Fade>
      <Fade direction='up' triggerOnce>
        <Services />
        <Jobs />
        <Brands />
        <Contact />
      </Fade>
    </>
  );
};
