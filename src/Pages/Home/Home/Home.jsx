import React from 'react';
import Contract from '../../Contract/Contract';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Service/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;