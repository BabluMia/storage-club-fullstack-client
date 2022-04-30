import React from 'react';
import './ExtraSectionTwo.css'
import {BiLaptop} from 'react-icons/bi'
import {BsHeadphones,BsFillMouse3Fill ,BsSmartwatch,BsFillCameraFill} from 'react-icons/bs'
import {GiSoundOn ,GiSmartphone} from 'react-icons/gi'
import {AiOutlineTablet} from 'react-icons/ai'
import {MdIron} from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'

const ExtraSectionTwo = () => {
    return (
        <div>
            <h2 className='text-center my-3 my-lg-4'>WE ALSO HAVE</h2>
            <div className="container my-5">
                <div className="row justify-content-around my-2">
                    
                </div>
                <div className="row justify-content-around gap-2 my-3">
                <div className="col-lg-2 ex-two  col-8 col-md-5">
                    <BiLaptop/>
                    <p>Laptop</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                    <BsSmartwatch/>
                    <p>Smart Watch</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                    <GiSoundOn/>
                    <p>Speaker</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                        <GiSmartphone />
                        <p>Smartphone</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                        <AiOutlineTablet/>
                        <p>Tablet</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                    <BsFillMouse3Fill/>
                    <p>Mouse</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                    <MdIron/>
                    <p>Iron</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                    <BsHeadphones/>
                    <p>Headphone</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                       <BsFillCameraFill/>
                        <p>Camera</p>
                    </div>
                    <div className="col-lg-2 ex-two col-8 col-md-5">
                        <FiMonitor/>
                        <p>Monitor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionTwo;