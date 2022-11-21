import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";


import { UserContext } from "../../../context/Authcontext";

const Modal = ({ booking, selected , refetch , setBooking}) => {
  

  const { name, slots } = booking;
  const { user } = useContext(UserContext);
  const date = format(selected, "PP");
  const bookingHandeler = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const treatmentName = name;
    const patientName = user?.displayName;
    const email = user?.email;
    const userInfo = {
      date,
      patientName,
      treatmentName,
      slot,
      email,
      phone,
    };
    fetch(`http://localhost:5000/booking?email=${user?.email}&date=${date}&treatmentName=${name}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(userInfo),
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data)
      if(data.acknowledged){
        toast.success("Booking successfully")
        refetch()
        setBooking(null)

      }
      else{
        toast.error(data.message)
      }
    })
  
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={bookingHandeler}
            className="mt-10 grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              disabled
              defaultValue={date}
              className="input input-bordered w-full"
            />

            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Full name"
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <button   type="submit" className="btn btn-primary mt-5 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
