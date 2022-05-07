// import { async } from "@firebase/util";
// import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { id } = useParams();
  const [singlePd, setSinglePd] = useState({});
  // const [isReload, setIsReload] = useState(false);
  // console.log(singlePd);

  // const url = ` https://tranquil-castle-58262.herokuapp.com/inventory/${id}`;
  const url = ` https://tranquil-castle-58262.herokuapp.com/inventory/${id}`;
  // console.log(url);
  let { quantity, name, img, Price, Model, desc, status , suplier } = singlePd;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSinglePd(data);
      });
  }, [url, singlePd]);

  const handleDelevired = async (e) => {
    quantity = quantity - 1;
    let data = await axios.put(url, { quantity: quantity }).then((res) => {
      if (res.request.status === 200) {
        toast(" Delevired One Product");
      }
    });
  };
  const updateRef = useRef("");

  const handleStock = async (event) => {
    quantity = parseInt(quantity) + parseInt(updateRef.current.value);
    console.log(quantity);
    if (quantity === 0 && quantity < 0) {
      return toast("Out Of Stock");
    } else if (parseInt(updateRef.current.value)){
      let data = await axios.put(url, { quantity: quantity }).then((res) => {
        if (res.request.status === 200) {
          toast("Product Updated");
        }
      });
    }
    else{
      toast('Please input a quantity!!')
    }
  };

  return (
    <div style={{ minHeight: "80vh" }} className='inventory-div'>
      <h1 className="text-center my-3">{singlePd?.name}</h1>
      <div className="container my-5">
        <div className="row justify-content-around inventory-div">
          <div className="col-12 col-lg-4 justify-content-center align-items-center">
            <img src={img} className='img-fluid' alt="" />
          </div>
          <div className="col-12 col-lg-7 my-3">
            <h6>Product Id : {singlePd?._id}</h6>
            <h5>Product Name : {name}</h5>
            <h5>Product Model : {Model}</h5>
            <h5>Product Price : ${Price}</h5>
            <h5>Availavle Products :{quantity} </h5>
            <h6>Information: {desc}</h6>
            
            <h6>Supplier: {suplier}</h6>
            {/* <h6>Status: {status}</h6> */}
            <h5> Status: {quantity > 0 ? "In Stock" : "sold Out"}</h5>
            {parseInt(quantity) === 0 ? (
              <button
                className="btn btn-danger my-2"
                disabled
                onClick={handleDelevired}
              >
                Delevired
              </button>
            ) : (
              <button className="btn btn-danger my-2" onClick={handleDelevired}>
                Delevired
              </button>
            )}

            <div className="update">
              <div className="row align-items-center">
                <div className="col-7">
                  <input
                    type="number"
                    name="update"
                    ref={updateRef}
                    className="bg-transparent rounded-lg"
                    style={{ border: "1px solid gray" }}
                    required
                  />
                </div>
                <div className="col-4 ">
                  <button
                    className=" rounded px-5 py-2 border border-dark  btn btn-transparent text-dark py-0  custom-btn fw-bold"
                    onClick={handleStock}
                    
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <Link to={"/manage-inventory"}>
              <button className="btn btn-danger my-2">Manage Inventory</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
