import React from 'react';
import './Popular.css';
import {motion} from 'motion/react';
import {PopularImage_1, PopularImage_2, PopularImage_3} from '../../Assets/img';
let PopularImages = [
  {image: PopularImage_1, title: 'Logan Mountain', location: 'Canadá'},
  {image: PopularImage_2, title: 'Spike Forest', location: 'Irland'},
  {image: PopularImage_3, title: 'Garda Lake', location: 'Italy'}
];

const Popular = () => {
  let PopularVar = {
    hidden: {opacity: 0, y: '-50px'},
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 1}
    }
  };
  const containerVariants = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  return (
    <section className='popular d-flex flex-column align-items-center text-center'>
      <motion.h2 whileInView={'show'} viewport={{once: true, amount: 0.3}} variants={PopularVar} initial={'hidden'}  className='my-5'>
        Enjoy The Beauty <br />
        Of The World
      </motion.h2>
      <motion.div whileInView={'show'} viewport={{once: true, amount: 0.3}} variants={containerVariants} initial='hidden'  className='images d-flex flex-column flex-md-row column-gap-3 column-gap-lg-5'>
        {PopularImages.map((image, index) => (
          <PopularImage key={index} image={image.image} title={image.title} location={image.location} />
        ))}
      </motion.div>
    </section>
  );
};

function PopularImage({image, title, location}) {
  const itemVariants = {
    hidden: {opacity: 0, y: -50},
    show: {opacity: 1, y: 0, transition: {duration: 1.5}}
  };
  return (
    <motion.div variants={itemVariants} className='image-card text-start mb-5'>
      <div className='image-cover image-popular-cover overflow-hidden mb-2'>
        <img className='hovered-image' src={image} alt='PopularImage' />
      </div>
      <h5>{title}</h5>
      <p>
        <i className='ri-map-pin-line'></i> {location}
      </p>
    </motion.div>
  );
}
export default Popular;
