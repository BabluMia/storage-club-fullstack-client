import React, { useEffect, useState } from "react";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import Inventory from "../Inventory/Inventory";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-castle-58262.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {/* banner section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img
              src="http://demo.bestprestashoptheme.com/warehouse/modules/novnivoslider/images/7bf86086d5e35510fee4701490f352902deeb865_Untitled-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* item test */}
      <div className="my-4 pb-4">
        <h2 className="text-center my-5">Inventory </h2>
        
          <div className="container row justify-content-evenly gap-5 mx-auto ">
            {products.slice(0, 6).map((product) => (
              <Inventory key={product._id} product={product}></Inventory>
            ))}
          </div>
      </div>
      {/* extra section 1 */}
      <ExtraSectionOne />
      {/* extra section 2 */}
      <ExtraSectionTwo />
    </div>
  );
};

export default Home;
