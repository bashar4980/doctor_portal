import React from "react";
import treatment from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import Button from "../../../Component/Button";

const Treatment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero mb-20"
    >
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <img
            className="rounded-lg hidden lg:block max-w-[636px] -mt-24"
            src={treatment}
            alt="treatment img"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-primary text-bold">Appoinment</h1>
          <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
