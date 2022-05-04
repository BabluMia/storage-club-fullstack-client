import axios from "axios";
// import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllInventory = ({ sProduct }) => {
  const url = `http://localhost:5000/inventory/${sProduct._id}`;
  const handleDelete = async () => {
    let confrim = window.confirm("yes or not");
    // console.log(confrim);
    if (confrim) {
      let data = await axios.delete(url).then((res) => {
        if (res.request.status === 200) {
          toast("deleted");
        }
      });
      console.log(data);
      //   setDeleted(true);
    } else {
      //   setDeleted(false);
      return;
    }
    // useEffect(() => {}, []);
    // let data = await axios.delete(url);
    // console.log(data);
  };

  return (
    <div
      className="row my-4 py-2 rounded shadow"
      style={{ border: "1px solid gray", cursor: "pointer" }}
    >
      <div className="col-3">
        <img
          src={sProduct?.img}
          className="img-fluid text-center d-flex align-items-center"
          style={{ width: "100px" }}
          alt=""
        />
      </div>
      <div className="col-6 text-center">
        <h5>Name : {sProduct?.name}</h5>
        <h5>Model : {sProduct?.Model}</h5>
        <h5>Price : ${sProduct?.Price}</h5>
      </div>
      <div className="col-3 text-center d-flex align-items-center">
        <button className="btn btn-danger " onClick={handleDelete}>
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default AllInventory;
