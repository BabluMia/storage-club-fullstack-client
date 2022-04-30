import React, { useEffect, useState } from "react";
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
      <div>
        <h2>Length:{products.length}</h2>
        {products.map((product) => (
          <p>{product?.name}</p>
        ))}
      </div>
      {/* extra section 1 */}
      <div className="container">
          {/* row 1 */}
          <div className="row">
              <div className="col-12">
                  <div className="row">
                      <div className="col-6">
                          <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/db1eec8b1c7bee2ad8ff4019a0596dd0.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-6">
                      <div className="row gx-2">
                              <div className="col-6">
                                <img src="https://i.ibb.co/0Z0NQvw/fefee83b0a766bb19abcfa9b310590e8-removebg-preview.png" className="img-fluid" alt="" />
                              </div>
                              <div className="col-6">
                              <img src="https://i.ibb.co/QkvyX9q/379132388a452d2850f266b3e51825a3-removebg-preview.png" className="img-fluid" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* row 2 */}
              <div className="col-12">
                  <div className="row">
                      <div className="col-6">
                          <div className="row">
                              <div className="col-6">
                                <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/c655fdcf04fd1a1213d476ae04689f09.png" className="img-fluid" alt="" />
                              </div>
                              <div className="col-6">
                              <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/30456eb23a674f90a11992b291a6ee14.png" className="img-fluid" alt="" />
                              </div>
                          </div>
                      </div>
                      <div className="col-6">
                          <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/7b6c86de46b30561cc8d4568c26084e1.png" className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    </div>
  );
};

export default Home;
