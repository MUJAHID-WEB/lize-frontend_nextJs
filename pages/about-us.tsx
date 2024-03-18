import Bonjour from '@/components/AboutPage/Bonjour';
import Equipe from '@/components/AboutPage/Equipe';
import Mission from '@/components/AboutPage/Mission';
import Notre from '@/components/AboutPage/Notre';
import Vision from '@/components/AboutPage/Vision';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

const AboutUs = () => {
  return (
    <>
      <Header headerType='secondary' />
      <Bonjour />
      <Notre />
      <Mission />
      <Vision />
      <Equipe />
      <Footer />
      <svg
        style={{ visibility: 'hidden', position: 'absolute' }}
        width='0'
        height='0'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <defs>
          <filter id='round'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='15'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default AboutUs;
