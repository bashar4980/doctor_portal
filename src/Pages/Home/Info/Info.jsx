import React from 'react'
import InfoCard from './Infocard';
import time from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
// import icon1 from '../../../assets/images/cavity.png'


function Info() {
    const infoData = [
        {
            _id:1,
           title:"Opening Hours",
           des:"9.00 AM - 10.00 PM",
           color:"bg-primary",
           icon: time
          
        },
        {   _id:2,
            title:"Visit our location",
            des:"9.00 AM - 10.00 PM",
            color:"bg-neutral",
            icon: marker
          
         },
         {
            _id:3,
            title:"Opening Hours",
            des:"9.00 AM - 10.00 PM",
            color:"bg-primary",
            icon:phone
            
           
         }
    ]
  return (
    <div className='my-5  grid grid-cols-1 gap-4 lg:grid-cols-3'>
     
     {
        infoData.map(info =><InfoCard key={info._id} info={info}></InfoCard>)
     }
    </div>
  )
}

export default Info