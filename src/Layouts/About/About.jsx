import React from 'react';
import './About.css';
import {AboutImage} from '../../Assets/img';
const About = () => {
  return (
    <section className='about d-flex flex-column row-gap-4 align-items-center text-center flex-md-row justify-content-between'>
      <div className='mt-5 d-flex align-items-center justify-content-center flex-column row-gap-2 mt-md-0 align-items-md-start text-md-start'>
        <h2>
          Learn More <br />
          About Travel
        </h2>
        <p>All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.</p>
        <button>
          Explore Travel <i className='ri-arrow-right-line'></i>
        </button>
      </div>
      <div className='about-image image-cover mx-3'>
        <img className='hovered-image' src={AboutImage} alt='AboutImage' />
      </div>
    </section>
  );
};

export default About;
