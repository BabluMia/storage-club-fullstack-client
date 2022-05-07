import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllInventory from "../AllInventory/AllInventory";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  // const [deleted, setDeleted] = useState(null);
  useEffect(() => {
    fetch(" https://tranquil-castle-58262.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  // console.log(deleted);
  // useEffect(() => {}, [products]);
  return (
    <div style={{ minHeight:'100vh'}}>
      <h2 className="text-center my-4 ">All Product</h2>
      <div className="container row mx-auto">
        {
          <div className="col-12 col-lg-6 mx-auto text-center">
            {products.map((sProduct) => (
              <AllInventory
                key={sProduct._id}
                sProduct={sProduct}
                // setDeleted={setDeleted}
              ></AllInventory>
            ))}
          </div>
        }
        <Link style={{textDecoration:'none'}} to='/add-item' className="d-flex justify-content-center align-items-center ">
        <Button className="btn btn-danger text-center "> Add Item </Button>
        </Link>
        
      </div>
    </div>
  );
};

export default ManageInventory;
