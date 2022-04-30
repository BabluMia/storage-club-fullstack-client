import React from 'react';

const ExtraSectionOne = () => {
    return (
        <div>
            <div className="container-fluid pt-2 pb-5" style={{backgroundColor:'#ecf0f1'}}>
          <h2 className="text-center my-4 py-4">OUR LUCKY PRODUCTS</h2>
          {/* row 1 */}
          <div className="row mx-auto container">
              <div className="col-12">
                  <div className="row">
                      <div className="col-12 col-lg-6">
                          <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/db1eec8b1c7bee2ad8ff4019a0596dd0.png" className="img-fluid" alt="" />
                      </div>
                      <div className="col-12 col-lg-6">
                      <div className="row my-3">
                              <div className="col-6 bottom">
                                <img src="https://i.ibb.co/0Z0NQvw/fefee83b0a766bb19abcfa9b310590e8-removebg-preview.png" className="img-fluid" alt="" />
                                <span>Airpod Pro</span>
                              </div>
                              <div className="col-6 bottom">
                              <img src="https://i.ibb.co/QkvyX9q/379132388a452d2850f266b3e51825a3-removebg-preview.png" className="img-fluid" alt="" />
                              <span>Emazone Alexa</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* row 2 */}
              <div className="col-12">
                  <div className="row">
                      <div className="col-12 col-lg-6">
                          <div className="row my-3">
                              <div className="col-6 top">
                                <img src="https://i.ibb.co/LpJPnfV/30456eb23a674f90a11992b291a6ee14-removebg-preview.png" className="img-fluid" alt="" />
                                <span>Home Theater</span>
                              </div>
                              <div className="col-6 top">
                              <img src="https://i.ibb.co/q0Rv51X/c655fdcf04fd1a1213d476ae04689f09-removebg-preview.png" className="img-fluid" alt="" />
                              <span>Amaz Fly</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-6">
                          <img src="http://demo.bestprestashoptheme.com/warehouse/modules/novpagemanage/img/7b6c86de46b30561cc8d4568c26084e1.png" className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
    );
};

export default ExtraSectionOne;