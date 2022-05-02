import React, { useEffect, useState } from "react";
import AllInventory from "../AllInventory/AllInventory";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-castle-58262.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <div>
      <h2 className="text-center my-4 " >All Product</h2>
      <div className="container row mx-auto">{
          <div className="col-12 col-lg-6 mx-auto text-center">
              {
                  products.map(sProduct => <AllInventory key={sProduct._id} sProduct={sProduct}></AllInventory>)
              }
          </div>
      }
          
      </div>
    </div>
  );
};

export default ManageInventory;
