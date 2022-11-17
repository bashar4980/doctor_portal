import React from "react";
import chair from "../../../assets/images/chair.png";
import { format } from 'date-fns';
import bannerbg from "../../../assets/images/bg.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointHome = ({selected , setSelected}) => {
  
    return (
        <div>
            <div
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-8"
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src={chair} alt="" />
            
          </div>
          <div className="">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              
            />
            <p>You picked {format(selected, 'PP')}.</p>;
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AppointHome;