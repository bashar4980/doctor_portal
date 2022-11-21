import React from 'react';

const AppointmentCard = ({appointment , setBooking}) => {
    const {slots , name} = appointment
    return (
    
             <div className="card  shadow">
        <div className="card-body">
          <h2 className="text-primary font-bold text-xl text-center">{name}</h2>
          <p className="text-center">
            {slots.length > 0 ? slots[0] : "Try another day"}
          </p>
          <p className="text-center">
            {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
          </p>
          <div className="card-actions justify-center">
            <label
             htmlFor="booking"
            onClick={()=> setBooking(appointment)}
             
              className="btn btn-primary text-white font-semibold"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    
    );
};

export default AppointmentCard;