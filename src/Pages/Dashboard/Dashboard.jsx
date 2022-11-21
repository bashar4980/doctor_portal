import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Authcontext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const email = user?.email;
  const { data: userAppointments, isLoading } = useQuery({
    queryKey: ["booking", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/booking?email=${email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading)
    return (
      <div className=" mx-auto  w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
    );

  return (
    <div className="py-5">
      <h1 className="text-primary text-2xl my-5">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
         
            {userAppointments.map((appointment , i) => {
              return(
                <tr className="hover" key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.date}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
