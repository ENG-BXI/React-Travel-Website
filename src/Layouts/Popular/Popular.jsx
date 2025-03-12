import React from 'react';
import './Popular.css';
import { PopularImage_1, PopularImage_2 } from '../../Assets/img';
let PopularImages = [
  {image: PopularImage_1, title: 'Logan Mountain', location: 'Canadá'},
  {image: PopularImage_2, title: 'Spike Forest', location: 'Irland'},
  {image: PopularImage_2, title: 'Garda Lake', location: 'Italy'}
];
const Popular = () => {
  return (
    <section className='popular d-flex flex-column align-items-center text-center'>
      <h2 className='my-5'>
        Enjoy The Beauty <br />
        Of The World
      </h2>
      <div className='images'>
      {PopularImages.map((image,index)=><PopularImage key={index} image={image.image} title={image.title} location={image.location} />)}
      </div>
    </section>
  );
};

function PopularImage({image , title,location}) {
  return (
    <div className='image-card  text-start mb-5'>
      <div className='image-cover overflow-hidden mb-2'>
        <img src={image} alt='PopularImage' />
      </div>
      <h5>{title}</h5>
      <p>
        <i class='ri-map-pin-line'></i> {location}
      </p>
    </div>
  );
}
export default Popular;
