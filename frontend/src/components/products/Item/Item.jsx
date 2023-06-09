import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = (props) => {
  const { addItem } = useCart();
  // console.log(user, user.accessToken)

  // const [userCurrent, setUserCurrent] = useState([]);

  //   const user = useSelector((state) => state.auth.login.currentUser);
  //   useEffect(() => {
  //     setUserCurrent(user);
  //   }, [user]);

  const [userCurrent, setUserCurrent] = useState([]);

    const user = useSelector((state) => state.auth.login.currentUser);
    useEffect(() => {
      setUserCurrent(user);
    }, [user]);

  return (
    <div
      className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
      style={{ width: "250px" }}
    >
      <div className="card p-0 overflow-hidden h-100 shadow">
        <NavLink to={`/products/${props.id}`}>
          <img
            src={props.image}
            className="card-img-top"
            style={{ height: "200px" }}
            alt={props.title}
          />
        </NavLink>
        <div
          className="card-body text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title fw-bold">₫ {props.price}</h5>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <NavLink to={`/products/${props.id}`}>
              <button className="btn btn-primary">Xem Chi Tiết</button>
            </NavLink>

            {/* <button className="btn btn-primary" onClick={() => addItem(props)}>
              Thêm
            </button> */}

            {userCurrent && (
            <button className="btn btn-primary" onClick={() => addItem(props)}>
              Thêm
            </button>
          )}
          {!userCurrent && (
            <NavLink >
              <button className="btn btn-primary">Thêm</button>
            </NavLink>
          )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Item;
