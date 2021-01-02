import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../../styles/Home.module.css'
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
          Tempo e Build
        </h1>
        <p></p>
        <h2 className={styles.paragrafo}>
          TEMPO
        </h2>
        <p></p>
        <Link href="/tempo"><button className={styles.button}>Saiba Mais</button></Link>
              </div>
        </center>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <center>
              <div className={styles.container}>
              <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
              <h1 className={styles.title}>
          Sobre mim
        </h1>
        <p></p>
        <h2 className={styles.paragrafo}>
          SOBRE
        </h2>
        <p></p>
        <Link href="/sobre"><button className={styles.button}>Saiba Mais</button></Link>
              </div>
        </center>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <center>
              <div className={styles.container}>
              <img src="/talles.svg" alt="Talles Salmon" className={styles.logohead}/>
              <h1 className={styles.title}>
          AQUASOLIS
        </h1>
        <p></p>
        <h2 className={styles.paragrafo}>
          SOLUÇÕES CONSTRUTIVAS
        </h2>
        <p></p>
        <Link href="http://www.aquasolis.com.br"><button className={styles.button}>Saiba Mais</button></Link>
              </div>
        </center>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;

  