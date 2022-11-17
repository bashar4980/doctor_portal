
import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../../Component/Button';

const Treatment = () => {
    return (
<div className=" my-36 hero">
  <div className="hero-content flex-col lg:flex-row gap-10" >
  <div className='max-w-[460px] max-h-[560px]'>
<img className='rounded-lg' src={treatment} alt="treatment img" />
</div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default Treatment;