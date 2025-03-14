import React from 'react';
import './Explore.css';
import {ExploreImage, personImage} from '../../Assets/img';
const Explore = () => {
  return (
    <section className='explore px-0 d-flex flex-column align-items-center text-center align-items-lg-start text-lg-start'>
      <div className='w-100 explore-cover-image mb-5 '>
        <div className='overlay overlay-top'></div>
        <img className='h-100' src={ExploreImage} alt='ExploreImage' />
        <div className='overlay overlay-down'></div>
      </div>
      <div className='explore-data w-100'>
        <h2 className='px-3'>
          Explore The <br />
          Best Paradises
        </h2>
        <div className='px-3  d-flex flex-column align-items-center justify-content-between row-gap-3 flex-lg-row  '>
          <p className='mb-4 mb-lg-0'>Exploring paradises such as islands and valleys when traveling the world is one of the greatest experiences when you travel, it offers you harmony and peace and you can enjoy it with great comfort.</p>
          <div className='d-flex justify-content-center align-items-center column-gap-2'>
            <img style={{width: '30px'}} className='rounded-circle' src={personImage} alt='personImage' />
            Paul Jeams
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
