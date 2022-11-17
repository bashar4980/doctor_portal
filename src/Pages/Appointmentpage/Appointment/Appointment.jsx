import React , {useState} from "react";
import AppointHome from "../Appointmenthome/AppointHome";



import Availableappointmetn from "../Availableappointment/Availableappointmetn";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());


  return (
  <>
    <AppointHome selected={selected} setSelected={setSelected}></AppointHome>
    <Availableappointmetn selected={selected}></Availableappointmetn>
    
  
  </>
  );
};

export default Appointment;
