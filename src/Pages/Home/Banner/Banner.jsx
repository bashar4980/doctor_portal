import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../../../Component/Button';
import bannerbg from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div style={{
          backgroundImage: `url(${bannerbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }} className='py-8'>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='lg:w-1/2'>
    <img src={chair} alt="" />
   </div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Adults and kids, we welcome patients of all ages! Our team is passionate about building lifetime relationships through positive experiences, featuring</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;