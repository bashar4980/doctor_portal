import React from 'react';
import footerbg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{
          background:`url(${footerbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
            <footer className="footer p-10  ">
  <div>
    <span className="footer-title">Services</span> 
    <a href="/" className="link link-hover">Branding</a>
    <a href="/" className="link link-hover">Design</a>
    <a href="/" className="link link-hover">Marketing</a>
    <a href="/" className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href="/" className="link link-hover">About us</a>
    <a href="/" className="link link-hover">Contact</a>
    <a href="/" className="link link-hover">Jobs</a>
    <a href="/" className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href="/" className="link link-hover">Terms of use</a>
    <a href="/" className="link link-hover">Privacy policy</a>
    <a href="/" className="link link-hover">Cookie policy</a>
  </div>
</footer>
<p className='text-center'>Copyright 2022 All Rights Reversed</p>
        </div>
    );
};

export default Footer;