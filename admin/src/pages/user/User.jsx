import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";

const Order = () => {
  const [isuser, setIsuser] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  //   if (user?.accessToken) {
  //     getAllUser(user?.accessToken, dispatch);
  //   }
  // });
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  //   if (user?.accessToken) {
  //     getAllUser(user?.accessToken, dispatch);
  //   }
  // });

  useEffect(() => {
      const fetchproducts = async() => {
          const {data} = await axios.get("http://localhost:3002/v1/user")
          setIsuser(data);
      }
      fetchproducts();
  }, []);

  return (
    <div >
      <table className="table table-light table-hover m-0 table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Tên đăng nhập</th>
            <th>Email</th>
            <th>Mật Khẩu</th>
            <th>Is Admin</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {isuser.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1} </th>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>
                  {item.email}
                </td><td>
                  {item.password}
                </td><td>
                  {item.isAdmin}
                </td>
                <td>
                  <tr className="d-flex justify-content-around">
                    <td className="btn btn-danger">Offline </td>
                  </tr>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
