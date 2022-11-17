import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people from '../../../assets/images/people1.png'

const Testimonial = () => {
  return (
    <div className="text-justify p-5">
      <div className="testimonial_content  flex align-middle justify-between">
        <div>
          <h1 className="text-secondary">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>

        <div>
          <img className="max-w-48 max-h-36" alt="/" src={quote} />
        </div>
      </div>
      <div className="py-8 review_section grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/*  */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <p >
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions  justify-start">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people} alt="/" />
                </div>
              </div>
              <div className="mt-5 ml-3">
                <h1 className="card-title">Jhon Deo</h1>
                <h2>England</h2>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <p >
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions  justify-start">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people} alt="/" />
                </div>
              </div>
              <div className="mt-5 ml-3">
                <h1 className="card-title">Jhon Deo</h1>
                <h2>England</h2>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <p >
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card-actions  justify-start">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people} alt="/" />
                </div>
              </div>
              <div className="mt-5 ml-3">
                <h1 className="card-title">Jhon Deo</h1>
                <h2>England</h2>
              </div>
            </div>
          </div>
        </div>
        
        {/*  */}
      </div>
    </div>
  );
};

export default Testimonial;
