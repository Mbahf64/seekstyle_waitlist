"use client"
import React, { useEffect } from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector(`.${styles.marqueeContent}`);

    if (marqueeContent) {
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);


  return (
    <div className={styles.marquee}>
    <ul className={styles.marqueeContent}>
      <li><img className='w-[69px] h-[30px]' src="/Zara.svg" alt="Zara" /></li>
      <li><img className='w-[135px] h-[28px]' src="/Shein.svg" alt="Shein" /></li>
      <li><img className='w-[143px] h-[30px]' src="/Crocs.png" alt="Crocs" /></li>
      <li><img className='w-[110px] h-[32px]' src="/Asos.svg" alt="Asos" /></li>
      <li><img className='w-[72.79px] h-[42px]' src="/Nike.svg" alt="Nike" /></li>
      <li><img className='w-[173.65px] h-[24.17px]' src="/Ashluxury.svg" alt="Ashluxury" /></li>
      <li><img className='w-[75px] h-[42px]' src="/NewBalance.svg" alt="NewBalance" /></li>
      <li><img className='w-[74px] h-[42px]' src="/DrMartens.svg" alt="DrMartens" /></li>
      {/* Duplicate the content */}
      <li><img className='w-[69px] h-[30px]' src="/Zara.svg" alt="Zara" /></li>
      <li><img className='w-[135px] h-[28px]' src="/Shein.svg" alt="Shein" /></li>
      <li><img className='w-[143px] h-[30px]' src="/Crocs.png" alt="Crocs" /></li>
      <li><img className='w-[110px] h-[32px]' src="/Asos.svg" alt="Asos" /></li>
      <li><img className='w-[72.79px] h-[42px]' src="/Nike.svg" alt="Nike" /></li>
      <li><img className='w-[173.65px] h-[24.17px]' src="/Ashluxury.svg" alt="Ashluxury" /></li>
      <li><img className='w-[75px] h-[42px]' src="/NewBalance.svg" alt="NewBalance" /></li>
      <li><img className='w-[74px] h-[42px]' src="/DrMartens.svg" alt="DrMartens" /></li>
    </ul>
  </div>
  )
    

};

export default Marquee;

