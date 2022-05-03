import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [singlePd, setSinglePd] = useState({});
  const [isReload, setIsReload] = useState(false);
  console.log(singlePd);

  const url = `http://localhost:5000/inventory/${id}`;
  // const url = `https://tranquil-castle-58262.herokuapp.com/inventory/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSinglePd(data));
  }, []);
  let { quantity, name, img, Price, Model, desc, status } = singlePd;

  const handleDelevired = (event) => {
    console.log(quantity);
    event.preventDefault();
    quantity = parseInt(quantity - 1);
    console.log(quantity);

    // const updateQuantity = { quantity, name, img, Price, Model, desc, status };
    // console.log(updateQuantity);
    fetch(url, {
      method: "POST",
      body: quantity,
      headers: {
        "Content-type": "application/json; ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const updateRef = useRef("");

  const handleStock = (event) => {
    event.preventDefault();
    const stock = parseInt(updateRef.current.value);

    const newQuantity = singlePd.quantity + stock;
    console.log(newQuantity);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({ newQuantity }),
      headers: {
        "Content-type": "application/json; ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
      });
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1 className="text-center my-3">{singlePd?.name}</h1>
      <div className="container my-5">
        <div className="row justify-content-around">
          <div className="col-12 col-lg-4">
            <img src={img} alt="" />
          </div>
          <div className="col-12 col-lg-7 my-3">
            <h6>Product Id : {singlePd?._id}</h6>
            <h5>Product Name : {name}</h5>
            <h5>Product Model : {Model}</h5>
            <h5>Product Price : ${Price}</h5>
            <h5>Availavle Products :{quantity} </h5>
            <h6>Information: {desc}</h6>
            <h6>Status: {status}</h6>
            <button className="btn btn-danger my-2" onClick={handleDelevired}>
              Delevired
            </button>
            <div className="update">
              <div className="row align-items-center">
                <div className="col-7">
                  <input
                    type="number"
                    name="update"
                    ref={updateRef}
                    className="bg-transparent rounded-lg"
                    style={{ border: "1px solid gray" }}
                  />
                </div>
                <div className="col-4 ">
                  <button
                    className=" rounded px-3 py-2 border border-dark  btn btn-transparent text-dark py-0  custom-btn fw-bold"
                    onClick={handleStock}
                  >
                    Update Stock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
