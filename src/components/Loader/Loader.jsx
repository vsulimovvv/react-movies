import React, { useEffect } from 'react';
import './Loader.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const Loader = () => {
  const tlLoader = gsap.timeline();

  useEffect(() => {
    // Loader
    tlLoader
      .set('.loader__item', { yPercent: -100 })
      .set('.loader__title', { opacity: 0 })
      .to('.loader__item', {
        yPercent: 0,
        duration: 0.5,
        stagger: 0.25, // задержка
      })
      .to('.loader__item', {
        yPercent: 100,
        duration: 0.5,
        stagger: 0.25,
      })
      .to('.loader__title', {
        opacity: 1,
        duration: 1,
        scale: 1.2,
      })
      .set('.loader__item', {
        yPercent: -100,
      })
      .to('.loader__title', {
        opacity: 0,
        duration: 1,
        scale: 0.8,
      })
      .to(
        '.loader',
        {
          yPercent: -100,
          duration: 1,
        },
        '-=0.2'
      );
  }, []);

  return (
    <div className="loader">
      <div className="loader__title">React Movies</div>
      <div className="loader__item"></div>
      <div className="loader__item"></div>
      <div className="loader__item"></div>
    </div>
  );
};

export default Loader;
