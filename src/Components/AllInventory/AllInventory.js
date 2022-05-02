import React from 'react';

const AllInventory = ({sProduct}) => {
    const handleDelete = () =>{
        alert("working")
    }
    return (
        <div  className="row my-4 py-2 rounded shadow" style={{border:"1px solid gray",cursor:"pointer"}}>
                        <div className="col-3">
                            <img src={sProduct?.img} className='img-fluid text-center d-flex align-items-center' style={{width:'100px'}} alt="" />
                        </div>
                        <div className="col-6 text-center">
                            <h5>Name : {sProduct?.name}</h5>
                            <h5>Model : {sProduct?.Model}</h5>
                            <h5>Price : ${sProduct?.Price}</h5>

                        </div>
                        <div className="col-3 text-center d-flex align-items-center">
                            <button className="btn btn-danger " onClick={handleDelete}>Delete </button>
                        </div>
                        
                  </div>
    );
};

export default AllInventory;