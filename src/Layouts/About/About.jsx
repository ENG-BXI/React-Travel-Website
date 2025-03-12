import React from 'react';
import './About.css';
import {AboutImage} from '../../Assets/img';
const About = () => {
  return (
    <section className='about d-flex flex-column row-gap-3 align-items-center text-center'>
      <h2 className='mt-5'>
        Learn More <br />
        About Travel
      </h2>
      <p>All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.</p>
      <button className='mb-4'>
        Explore Travel <i class='ri-arrow-right-line'></i>
      </button>
      <div className='about-image overflow-hidden bg-danger mx-3'>
        <img src={AboutImage} alt='AboutImage' />
      </div>
    </section>
  );
};

export default About;
