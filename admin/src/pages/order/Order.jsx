import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";

const Order = () => {
  const [products, setProducts] = useState([]);
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
          const {data} = await axios.get("http://localhost:3002/api/orders")
          setProducts(data);
      }
      fetchproducts();
  }, []);
  console.log(products)

  const [confirmedRows, setConfirmedRows] = useState([]);
  const [canceledRows, setCanceledRows] = useState([]);
  const [isCancelClicked, setIsCancelClicked] = useState(false);

  return (
    <div >
      <table className="table table-light table-hover m-0 table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Tên</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ghi chú</th>
            <th>Sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            const isConfirmed = confirmedRows.includes(index);
            const isCanceled = canceledRows.includes(index);
            const isButtonDisabled = isConfirmed || isCanceled;
            const buttonClassNames = "btn " + (isConfirmed ? "btn-success" : "btn-primary");
            const cancelButtonClassNames = "btn " + (isCanceled ? "btn-danger" : "btn-warning");
            return (
              <tr key={index}>
                <th scope="row">{index + 1} </th>
                <td>{item.User}</td>
                <td>{item.fullName}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  {item.address} {item.district} {item.city}
                </td>
                <td>{item.notes}</td>
                <td>
                  {item.listProducts &&
                    item.listProducts.map((data, index) => (
                      <tr>
                        <td>
                          <img
                            src={data.productImage}
                            style={{
                              height: "40px",
                              width: "40px",
                              marginRight: "20px",
                            }}
                            alt={data.title}
                          />
                          {data.name} ( {data.qty})
                        </td>
                      </tr>
                    ))}
                    
                </td>
                <td>₫ {item.total.toLocaleString()}</td>
                <td>
                  {/* <tr className="d-flex justify-content-around">
                    <td className="btn btn-primary">Xác nhận </td>
                    <td className="btn btn-danger">Huỷ </td>
                  </tr> */}
                  {isCanceled ? (
            <button type="button" class="btn btn-danger">Đã hủy</button>
          ) : (
            <div className="d-flex justify-content-around">
              <button
                className={buttonClassNames}
                onClick={() => {
                  setConfirmedRows([...confirmedRows, index]);
                  setIsCancelClicked(false);
                }}
                disabled={isButtonDisabled}
              >
                Xác nhận
              </button>
              <button
                className={cancelButtonClassNames}
                onClick={() => {
                  setCanceledRows([...canceledRows, index]);
                  setIsCancelClicked(true);
                }}
                disabled={isButtonDisabled}
              >
                Hủy
              </button>
            </div>
          )}
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
