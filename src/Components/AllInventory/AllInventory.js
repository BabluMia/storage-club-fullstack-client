import axios from "axios";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllInventory = ({ sProduct }) => {
  const url = ` https://tranquil-castle-58262.herokuapp.com/inventory/${sProduct._id}`;
  const handleDelete = async () => {
    let confrim = window.confirm("yes or not");
    if (confrim) {
      let data = await axios.delete(url).then((res) => {
        if (res.request.status === 200) {
          toast("deleted");
        }
      });
    } else {
      return;
    }
  };

  return (
    <div
      className="row my-4 py-2 rounded shadow mx-auto justify-content-center py-3"
      style={{ border: "1px solid gray", cursor: "pointer" }}
    >
      <div className="col-5 col-lg-3">
        <img
          src={sProduct?.img}
          className="img-fluid text-center d-flex align-items-center"
          style={{ width: "100px" }}
          alt=""
        />
      </div>
      <div className="col-8 text-center col-lg-5">
        <h5>Name : {sProduct?.name}</h5>
        <h5>Model : {sProduct?.Model}</h5>
        <h5>Price : ${sProduct?.Price}</h5>
      </div>
      <div className="col-6 col-lg-4 text-center d-flex align-items-center">
        <button className="btn btn-danger me-1" onClick={handleDelete}>
          Delete{" "}
        </button>
        <Link to={`/inventory/${sProduct._id}`}>
          <button className="btn btn-danger ">Update </button>
        </Link>
      </div>
    </div>
  );
};

export default AllInventory;
