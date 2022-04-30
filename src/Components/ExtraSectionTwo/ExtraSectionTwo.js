import React from 'react';
import {BiLaptop} from 'react-icons/bi'
import {BsHeadphones} from 'react-icons/bs'
import {GiSoundOn} from 'react-icons/gi'

const ExtraSectionTwo = () => {
    return (
        <div>
            <h2 className='text-center my-3 my-lg-4'>WE ALSO SALE</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                    <BiLaptop/>
                    <p>Laptop</p>
                    </div>
                    <div className="col-lg-2">
                    <BsHeadphones/>
                    <p>Headphone</p>
                    </div>
                    <div className="col-lg-2">
                    <GiSoundOn/>
                    <p>Speaker</p>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionTwo;