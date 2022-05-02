import React from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Inventorys.css'

const Inventorys = ({product}) => {
    const {_id,name,Model,Price,img,desc,quantity,suplier} = product
    return (
        <div className='col-lg-3 px-4 pb-4 shadow rounded-lg'>
        <img src={img} alt="" style={{maxWidth:'250px'}} />
        <h5>{name}</h5>
        <h6>Model: {Model}</h6>
        <p> <span className='fw-bold'>Deatail:</span> {desc.slice(0,50)} ... </p>
        <h6>Price: ${Price}</h6>
        <h6>In Stock: {quantity}</h6>
        <h6>Supplier: {suplier}</h6>
        <Link to={`/inventory/${_id}`}>
        <Button className='pd-btn'  >Update Now</Button>
        </Link>
        
    </div>
    );
};

export default Inventorys;