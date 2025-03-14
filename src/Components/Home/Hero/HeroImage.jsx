import {motion} from 'motion/react';

function HeroImage({image, title, index, imageHeroRef}) {
  function handleClick() {
    imageHeroRef.current.style.backgroundImage = `url(${image})`;
  }
  const itemVariants = {
    hidden: {opacity: 0, y: -50},
    show: {opacity: 1, y: 0, transition: {duration: 1.5}}
  };
  return (
    <motion.div
      variants={itemVariants}
      onClick={() => {
        handleClick();
      }}
      className='image-cover'
    >
      <img className='hovered-image' src={image} alt='HeroImage_1' />
      <p className='position-absolute mb-0 text-white'>{title}</p>
    </motion.div>
  );
}
export default HeroImage;
