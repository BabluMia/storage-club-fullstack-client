import React from 'react';
import './ExtraSectionOne.css'
import phon1 from '../Image/phon1.png'
import phon2 from '../Image/phon2.png'

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
                          <img src={phon1} className="img-fluid" alt="" />
                      </div>
                      <div className="col-12 col-lg-6">
                      <div className="row my-3">
                              <div className="col-6 bottom">
                                <img src="https://i.ibb.co/0Z0NQvw/fefee83b0a766bb19abcfa9b310590e8-removebg-preview.png" className="img-fluid" alt="" />
                                <span className='mini-text'>Airpod Pro</span>
                              </div>
                              <div className="col-6 bottom">
                              <img src="https://i.ibb.co/QkvyX9q/379132388a452d2850f266b3e51825a3-removebg-preview.png" className="img-fluid" alt="" />
                              <span className='mini-text'>Emazone Alexa</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* row 2 */}
              <div className="col-12">
                  <div className="row">
                      <div className="col-12 col-lg-6">
                          <div className="row my-3 my-md-3">
                              <div className="col-6 top">
                                <img src="https://i.ibb.co/LpJPnfV/30456eb23a674f90a11992b291a6ee14-removebg-preview.png" className="img-fluid" alt="" />
                                <span className='mini-text'>Home Theater</span>
                              </div>
                              <div className="col-6 top">
                              <img src="https://i.ibb.co/q0Rv51X/c655fdcf04fd1a1213d476ae04689f09-removebg-preview.png" className="img-fluid" alt="" />
                              <span className='mini-text'>Amaz Fly</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-6">
                          <img src={phon2} className="img-fluid" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </div>
    );
};

export default ExtraSectionOne;