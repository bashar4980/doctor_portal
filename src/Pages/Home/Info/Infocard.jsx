import React from 'react';

const InfoCard = ({info}) => {
    const {title , icon , des , color} = info
    return (
        <div className={` ${color} text-white card card-side  shadow-xl`}>
  <figure><img src={icon} className="ml-5 my-10" alt="Movie"/></figure>
  <div className="card-body  my-12">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{des}</p>
    
  </div>
</div>
    );
};

export default InfoCard;