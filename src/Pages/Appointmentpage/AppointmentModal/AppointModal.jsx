import React from "react";

const AppointModal = ({ booking, selected }) => {
  const { name, slots } = booking;
  console.log(slots);

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="appointment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="mt-10 grid grid-cols-1 gap-3">
            <input
              type="text"
              disabled
              value={selected}
              className="input input-bordered w-full"
            />

            <select className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </form>
          <label htmlFor="appointment" className="btn btn-primary mt-5 w-full">Submit</label>
        </div>
      </div>
    </div>
  );
};

export default AppointModal;
