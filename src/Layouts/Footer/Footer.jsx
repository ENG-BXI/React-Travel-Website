import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='pt-5 d-flex flex-wrap flex-column justify-content-between flex-md-row text-nowrap  '>
      <div className='mb-5 '>
        <h6 className='text-white'>Travel</h6>
        <p>
          Travel with us and explore <br />
          the world without limits.
        </p>
      </div>
      <div className='row row-gap-3 '>
        <div className='col-6 col-md-3'>
          <h6 className='text-white mb-3'>About</h6>
          <ul>
            <li> About Us</li>
            <li> Features</li>
            <li> News & Blog</li>
          </ul>
        </div>
        <div className='col-6 col-md-3'>
          <h6 className='text-white mb-3'>Company</h6>
          <ul>
            <li> FAQs</li>
            <li> History</li>
            <li> Testimonials</li>
          </ul>
        </div>
        <div className='col-6 col-md-3'>
          <h6 className='text-white mb-3'>Contact</h6>
          <ul>
            <li> Call Center</li>
            <li> Support Center</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div className='col-6 col-md-3'>
          <h6 className='text-white mb-3'>Support</h6>
          <ul>
            <li> Privacy Policy</li>
            <li> Terms & Services</li>
            <li> Payments</li>
          </ul>
        </div>
      </div>
      <div className='d-flex col-12 flex-column align-items-center justify-content-between flex-md-row mx-auto mt-5 mb-3'>
        <p className='copyright order-1 order-md-0 mt-3 my-md-0'>&#169; Copyright Bedimcode. All rights reserved</p>
        <div className='fs-4 d-flex column-gap-2 justify-content-center align-items-center mt-5 mt-md-0'>
          <i className='social-icon ri-facebook-line'></i>
          <i className='social-icon ri-instagram-line'></i>
          <i className='social-icon ri-twitter-line'></i>
          <i className='social-icon ri-youtube-fill'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
