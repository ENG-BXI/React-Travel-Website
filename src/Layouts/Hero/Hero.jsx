import React from 'react';
import './Hero.css';
import {HeroImage_1, HeroImage_2, HeroImage_3, HeroImage_4} from '../../Assets/img';
import HeroImage from '../../Components/Home/Hero/HeroImage';

let ImageList = [
  {image: HeroImage_1, title: 'Croatia'},
  {image: HeroImage_2, title: 'Iceland'},
  {image: HeroImage_3, title: 'Italy'},
  {image: HeroImage_4, title: 'Spain'}
];
const Hero = () => {
  return (
    <section className='hero d-flex flex-column align-items-center text-center'>
      <h4>Welcome To Travel</h4>
      <h2>
        Explore <br />
        The World
      </h2>
      <p>Live the trips exploring the world, discover paradises, islands, mountains and much more, get your trip now.</p>
      <button className='mb-5'>
        Start Your Journey <i class='ri-arrow-right-line'></i>
      </button>
      <div className='images d-flex flex-column gap-3 align-items-center justify-content-center'>
        {ImageList.map((image, index) => (
          <HeroImage image={image.image} title={image.title} />
        ))}
      </div>
    </section>
  );
};


export default Hero;
