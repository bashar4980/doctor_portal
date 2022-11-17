import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../context/Authcontext";

const Reset = () => {
    const [useremail , setUseremail] = useState('');
    const {resetPassword} = useContext(UserContext)
    const  handleEmail = (event) =>{
        const form = event.target;

        const email = form.email.value;
        console.log(email)
        setUseremail(email);
        form.reset()
    }
   const resetHandeler = () =>{
       resetPassword(useremail)
       .then(()=>{
        toast.success("Please check your email")
       })
       .catch(error=> console.log(error))
   }
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="reset" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reset"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Reset password</h3>
          <div className="reser mt-5">
          <input
            type="email"
            name="email"
            required
            onBlur={handleEmail}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button onClick={resetHandeler} className="btn btn-primary w-full mt-5 text-bold text-white">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
