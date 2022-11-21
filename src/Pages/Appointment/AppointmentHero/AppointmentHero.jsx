import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import bannerbg from "../../../assets/images/bg.png";
import { format } from "date-fns";

const AppointmentHero = ({ selected, setSelected }) => {
  const date = format(selected, "PP");
  return (
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
              onSelect={(data) => {
                if (data) {
                  setSelected(data);
                }
              }}
            ></DayPicker>

            <p>You picked {date}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
