function HeroImage({image, title, index, imageHeroRef}) {
  function handleClick() {
    imageHeroRef.current.style.backgroundImage = `url(${image})`;
  }
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className='image-cover'
    >
      <img className='hovered-image' src={image} alt='HeroImage_1' />
      <p className='position-absolute mb-0 text-white'>{title}</p>
    </div>
  );
}
export default HeroImage;
