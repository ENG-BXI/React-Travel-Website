import React from 'react';
import './Join.css';
import {JoinImage} from '../../Assets/img';
const Join = () => {
  return (
    <section className='join d-flex flex-column align-items-center text-center'>
      <h2>
        Your Journey <br />
        Starts Here
      </h2>
      <p>Get up to date with the latest travel and information from us.</p>
      <input type='text' placeholder='Enter your email' />
      <button className='w-100 mt-3'>
        Subscribe Our Newsletter <i class='ri-arrow-right-line'></i>
      </button>
      <div>
        <img className=' mt-4 px-3' src={JoinImage} alt='JoinImage' />
      </div>
    </section>
  );
};

export default Join;
