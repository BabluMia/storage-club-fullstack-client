import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [userItem, setUserItem] = useState([]);
  // `https://tranquil-castle-58262.herokuapp.com/products?email=${user?.email}`
  useEffect(() => {
    fetch(`https://tranquil-castle-58262.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setUserItem(data));
  }, []);
  let item = userItem.filter( sitem => sitem?.userEmail === user?.email);
  const handleDelete = (event) => {};

  return (
    <div>
      <h2 className="text-center my-3">Item added by : {user?.displayName}</h2>
      <div className="row ">
        <div className="col-12 col-lg-6 mx-auto">
          {item?.map((uItem) => (
            <div
              className="row my-4 mx-2 py-2 rounded shadow"
              style={{ border: "1px solid gray", cursor: "pointer" }}
            >
              <div className="col-3">
                <img
                  src={uItem?.img}
                  className="img-fluid text-center d-flex align-items-center"
                  style={{ width: "100px" }}
                  alt=""
                />
              </div>
              <div className="col-6 text-center">
                <h5>Name : {uItem?.name}</h5>
                <h5>Model : {uItem?.Model}</h5>
                <h5>Price : ${uItem?.Price}</h5>
              </div>
              <div className="col-3 text-center d-flex align-items-center">
                <button className="btn btn-danger " onClick={handleDelete}>
                  Delete{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItem;
