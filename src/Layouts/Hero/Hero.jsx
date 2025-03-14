import React, {useRef} from 'react';
import './Hero.css';
import {BackgroundImage, HeroImage_1, HeroImage_2, HeroImage_3, HeroImage_4} from '../../Assets/img';
import HeroImage from '../../Components/Home/Hero/HeroImage';
import {motion} from 'motion/react';
let ImageList = [
  {image: BackgroundImage, title: 'Black Forest'},
  {image: HeroImage_1, title: 'Croatia'},
  {image: HeroImage_2, title: 'Iceland'},
  {image: HeroImage_3, title: 'Italy'},
  {image: HeroImage_4, title: 'Spain'}
];
const Hero = () => {
  let imageRef = useRef(null);
  let normalAnimation = {
    hidden: {opacity: 0, y: '-70px'},
    visible: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 1.5,
        staggerChildren: 0.5 // تأخير نصف ثانية بين كل صورة
      },
 
    },
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
    <section ref={imageRef} style={{backgroundImage: `url(${ImageList[0].image})`}} className='hero d-flex flex-column align-items-center align-items-md-start text-center text-md-start'>
      <motion.div variants={normalAnimation} initial='hidden' animate='visible'>
        <h4>Welcome To Travel</h4>
        <h2>
          Explore <br />
          The World
        </h2>
        <p>Live the trips exploring the world, discover paradises, islands, mountains and much more, get your trip now.</p>
        <button className='mb-5 mt-3'>
          Start Your Journey <i className='ri-arrow-right-line'></i>
        </button>
      </motion.div>
      <motion.div variants={containerVariants} initial='hidden' animate='show' className='images d-flex flex-column gap-3 align-items-center justify-content-start flex-md-row flex-wrap '>
        {ImageList.map((image, index) => (
          <HeroImage key={index} imageHeroRef={imageRef} index={index} image={image.image} title={image.title} />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
