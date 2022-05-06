import React, { useEffect, useState } from "react";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import Inventorys from "../Inventorys/Inventorys";
import banner from "../Image/baner.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(" https://tranquil-castle-58262.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <div>
      {/* banner section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={banner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* item test */}
      <div className="my-4 pb-4">
        <h2 className="text-center my-5">Inventory </h2>

        <div className="container row justify-content-evenly gap-5 mx-auto ">
          {products?.slice(0, 6).map((product) => (
            <Inventorys key={product._id} product={product}></Inventorys>
          ))}
        </div>
        <div className="my-4  text-center">
          <Link to={"/manage-inventory"}>
            <Button>All Inventory</Button>
          </Link>
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
