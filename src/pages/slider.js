import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const slideImages = [
  'images/slider/slider-1.webp',
  'images/slider/slider-2.webp',
  'images/slider/slider-3.webp'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <center>
              <div className={styles.container}>
              <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
              <h1 className={styles.title}>
          Bem vindo ao meu site em <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p></p>
        <h2 className={styles.title}>
          Página Inicial
        </h2>
        <p></p>
        <Link href="/"><button className={styles.button}>Saiba Mais</button></Link>
              </div>
        </center>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <h2>AQUASOLIS</h2><br/>
              <p>SOLUÇÕES CONSTRUTIVAS</p><br/>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;

  