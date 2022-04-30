import "./Contact.css";
import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Contact = () => {
    const [user] = useAuthState(auth)
    const submit =()=>{
        toast("Thanks For Submit")
      }
  return (
    <div>
      <div className="min-h my-5">
        <span className="text-white my-5">.</span>
        <h2 className="text-4xl text-center mt-5 pt-4 fw-bold  p-4">
          Contact To Storage Club .
        </h2>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              User Name
            </label>
            <input
              type="Text"
              className="form-control"
              placeholder={ user ? user?.displayName : "Mr . Brayn"}
            ></input>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              User Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder={user ? user?.email :"example@gmail.com"}
            ></input>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Response
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            className=" rounded-0 border border-dark my-4 btn btn-transparent text-dark px-4 py-2 me-4 custom-btn fw-bold"
            onClick={submit}
          >
            Send Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
