import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddItem =(event)=>{
      event.preventDefault()
      const userName = user.displayName;
      const userEmail = user.email;
      const name = event.target.pdName.value;
      const Model = event.target.pdModel.value;
      const quantity = event.target.pdQuantity.value;
      const Price = event.target.pdPrice.value;
      const desc = event.target.pdDesc.value;
      const img = event.target.pdDesc.value;
      const addedByUser = {
          userName,userEmail,name,Model,quantity,Price,desc,img
      }
      const defaultData = {
        name,Model,quantity,Price,desc,img
      }
      console.log("addbyuser",addedByUser);
      console.log("deafoult",defaultData);
    //   event.Reset()
  }
  return (
    <div style={{ maxWidth: "100vw",overflowX:'hidden' }}>
      <h2 className="my-4 text-center">Add A New Item</h2>
      <div className="row ">
        <div className="col-lg-6 mx-auto">
          <form action="" onSubmit={handleAddItem}>
            {/* name */}
            <input
              type="Text"
              className="form-control"
              placeholder={user ? user?.displayName : "Mr . Brayn"}
              readOnly
            ></input>
            {/* email */}

            <input
              type="Text"
              className="form-control"
              placeholder={user ? user?.email : "Example@gmail.com"}
              readOnly
            ></input>

            <input
              type="Text"
              className="form-control"
              placeholder="Product Name"
              required
              name="pdName"
            ></input>

            <input
              type="Text"
              className="form-control"
              placeholder="Model Name"
              required
              name="pdModel"
            ></input>

            <input
              type="Text"
              className="form-control"
              placeholder="Product Quantity"
              required
              name="pdQuantity"
            ></input>

            <input
              type="Text"
              className="form-control"
              placeholder="Product Price"
              required
              name="pdPrice"
            ></input>
            <input
              type="Text"
              className="form-control"
              placeholder="Product Description"
              required
              name="pdDesc"
            ></input>
            <input
              type="Text"
              className="form-control"
              placeholder="Image URL"
              required
              name="pdUrl"
            ></input>
            <input type="submit" className="btn btn-danger" value="Add Item" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
