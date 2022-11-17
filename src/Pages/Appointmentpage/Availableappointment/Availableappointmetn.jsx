import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import AppointModal from "../AppointmentModal/AppointModal";


const Availableappointmetn = ({selected}) => {
    const [appointments , setAppointmentoptions] = useState([]);
    const [booking , setBooking] = useState(null);
    console.log(booking)
    
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data => setAppointmentoptions(data))
    },[])
  return (
    <div className="py-5 mx-8">
      <h1 className="text-center text-primary">
        Available Appointments on {format(selected, 'PP')}
      </h1>
      <div className="appointment_options grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            appointments.map(appointment =>{
                return(
                    <AppointmentOption key={appointment._id} setBooking={setBooking} appointment={appointment}></AppointmentOption>
                )
            })
        }
      </div>
     {
      booking && <AppointModal booking={booking} selected={selected}></AppointModal>
     }
    
    </div>
  );
};

export default Availableappointmetn;
