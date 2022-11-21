
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../context/Authcontext';
import Modal from '../Modal/Modal';

import AppointmentCard from './AppointmentCard';

const Availableappointment = ({selected}) => {

    const {user} = useContext(UserContext)
    const [booking , setBooking] = useState(null)

    const date = format(selected , 'PP')

    const {data:appointments , isLoading  , error , refetch} = useQuery({
        queryKey:["appointmentOption", date],
      
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?user=${user?.email}&date=${date}`)
            const data = await res.json();
            return data
        }
    })

    if (isLoading) return <div className=" mx-auto  w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='py-5'>
            <h1 className='text-center text-primary text-2xl'>Available Appointments on {date}</h1>
         <div className=' mx-8 appointments gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointments.map(appointment =>{
                    return(
                        <AppointmentCard setBooking={setBooking} key={appointment._id} appointment={appointment}></AppointmentCard>
                    )
                })
            }


         </div>
           
            {
                booking &&  <Modal  setBooking={setBooking} refetch={refetch} booking={booking} selected={selected}></Modal>
            }
        </div>
    );
};

export default Availableappointment;