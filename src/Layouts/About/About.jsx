import React from 'react';
import './About.css';
import {AboutImage} from '../../Assets/img';
import {motion} from 'motion/react';

const About = () => {
  const divVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {duration: 1.5}
    }
  };
  return (
    <section className='about d-flex flex-column row-gap-4 align-items-center text-center flex-md-row justify-content-between'>
      <motion.div variants={{...divVariants, hidden: {opacity: 0, x: '-70px'}}} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.3}} className='mt-5 d-flex align-items-center justify-content-center flex-column row-gap-2 mt-md-0 align-items-md-start text-md-start'>
        <h2>
          Learn More <br />
          About Travel
        </h2>
        <p>All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.</p>
        <button>
          Explore Travel <i className='ri-arrow-right-line'></i>
        </button>
      </motion.div>
      <motion.div variants={{...divVariants, hidden: {opacity: 0, x: '70px'}}} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.3}} className='about-image image-cover mx-3'>
        <img className='hovered-image' src={AboutImage} alt='AboutImage' />
      </motion.div>
    </section>
  );
};

export default About;
