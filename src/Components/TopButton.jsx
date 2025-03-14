import React, {useRef} from 'react';

const TopButton = () => {
  let topButtonRef = useRef(null);
  function goToTop() {
    window.scrollTo({top: 0});
  }
  window.addEventListener('scroll', e => {
    if (window.scrollY > 200) topButtonRef.current.classList.add('show');
    else topButtonRef.current.classList.remove('show');
  });
  return (
    <div ref={topButtonRef} onClick={goToTop} className='top-button '>
      <i className='ri-arrow-up-fill'></i>
    </div>
  );
};

export default TopButton;
