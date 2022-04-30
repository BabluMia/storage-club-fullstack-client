import React, { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[])
  return (
    <div>
      {/* banner section */}
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novnivoslider/images/7bf86086d5e35510fee4701490f352902deeb865_Untitled-1.png" className="img-fluid" alt="" />
              </div>
          </div>
      </div>
    {/* item test */}
    <div>
        <h2>Length:{products.length}</h2>
        {
            products.map(product => <p>{product?.name}</p>)
        }
    </div>
    </div>
  );
};

export default Home;
