import React, { useState } from 'react';

import AppointmentHero from '../AppointmentHero/AppointmentHero';
import Availableappointment from '../Availableappointment/Availableappointment';


const Appointment = () => {
    const [selected , setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentHero selected={selected} setSelected={setSelected}></AppointmentHero>
            <Availableappointment selected={selected}></Availableappointment>
        </div>
    );
};

export default Appointment;