import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const addedByUser = {
      userName:user.displayName,
      userEmail:user.email,
      name:event.target.pdName.value,
      Model:event.target.pdModel.value,
      quantity:event.target.pdQuantity.value,
      Price:event.target.pdPrice.value,
      desc:event.target.pdDesc.value,
      img:event.target.pdUrl.value,
    };
    console.log(addedByUser)
    fetch("https://tranquil-castle-58262.herokuapp.com/products", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(addedByUser),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.insertedId) {
        toast("Item added");
      }
    });
    event.target.reset()
  };


  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <h2 className="my-4 text-center">Add A New Item</h2>
      <div className="row ">
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleAddItem}>
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
              type="number"
              className="form-control"
              placeholder="Product Quantity"
              required
              name="pdQuantity"
            ></input>

            <input
              type="number"
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
            <input
              
              type="submit"
              className="btn btn-danger"
              value="Add Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
