import React from 'react';
import './Join.css';
import {motion} from 'motion/react';
import {JoinImage} from '../../Assets/img';
const Join = () => {
    const divVariants = {
      show: {
        opacity: 1,
        x: 0,
        transition: {duration: 1.5}
      }
    };
  return (
    <section className='join d-flex flex-column justify-content-center align-items-center column-gap-5 flex-md-row text-center'>
      <motion.div variants={{...divVariants, hidden: {opacity: 0, x: '-70px'}}} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.3}} className='join-data order-md-1 text-md-start'>
        <h2>
          Your Journey <br />
          Starts Here
        </h2>
        <p>Get up to date with the latest travel and information from us.</p>
        <input type='text' placeholder='Enter your email' />
        <button className='w-100 mt-3'>
          Subscribe Our Newsletter <i className='ri-arrow-right-line'></i>
        </button>
      </motion.div>
      <motion.div variants={{...divVariants, hidden: {opacity: 0, x: '70px'}}} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.3}} className='join-image image-cover mx-3 mt-4'>
        <img className='hovered-image' src={JoinImage} alt='JoinImage' />
      </motion.div>
    </section>
  );
};

export default Join;
