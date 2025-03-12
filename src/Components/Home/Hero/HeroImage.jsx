function HeroImage({image, title}) {
  return (
    <div className="image-cover">
      <img className="hovered-image" src={image} alt='HeroImage_1' />
      <p className='position-absolute mb-0 text-white'>{title}</p>
    </div>
  );
}
export default HeroImage;