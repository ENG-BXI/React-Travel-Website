function HeroImage({image, title}) {
  return (
    <div className="overflow-hidden">
      <img className="object-fit-cover" src={image} alt='HeroImage_1' />
      <p className='position-absolute mb-0 text-white'>{title}</p>
    </div>
  );
}
export default HeroImage;