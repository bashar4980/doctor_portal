import React from "react";
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import White from '../../../assets/images/whitening.png'
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      des: "We Provide Fluoride Treatment.For any fluroide problem we can treatment you.",
      icon:Fluoride
    },
    {
        _id: 2,
        title: "Cavity Filling",
        des: "We Provide Cavity Filling.For any Cavity problem we can treatment you.",
        icon:Cavity
      },
    {
        _id: 3,
        title: "Teeth Whitening",
        des: "We Provide Teeth Whitening service. If your teeth color is darty , we can remove it.For any Cavity problem we can treatment you.",
        icon:White
      },
      
  ];
  return (
    <div className="mt-44">
      <div className="service_conter mb-16">
      <h1 className="text-primary text-center font-bold">Our Service</h1>
      <h1 className="text-4xl text-center">Services We Provide</h1>
      </div>
      <div className="mb-36 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
            servicesData.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
