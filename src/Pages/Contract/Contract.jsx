import React from "react";
import contractbg from "../../assets/images/appointment.png";

const Contract = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contractbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="my-5 py-5 rounded"
    >
      <h1 className="text-center text-primary mt-5" >Contract Us</h1>
      <h2 className="text-3xl text-center mb-5 text-white">
        Stay connected with us
      </h2>
      <form className="text-center my-5 mx-auto">
       <div>
       <input 
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-info w-full max-w-xs"
        />
       </div>
        <div>
        <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs my-5" />
        </div>
        <div>
        <textarea className="textarea md:w-80 textarea-primary" placeholder="Message"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contract;
