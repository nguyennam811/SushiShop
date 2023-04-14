
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const Products = () => {

  const columns = [
    { field: '_id', headerName: '_id', width: 80, },
    {
      field: 'image',
      headerName: 'Ảnh minh họa',
      width: 170,
      
      renderCell: (params) => (
        <img src={params.value} alt={params.row.title} style={{ width: 130 }} />
      ),
    },
    {
      field: 'title',
      headerName: 'Tên sản phẩm',
      width: 250,
           
    },
    {
      field: 'price',
      headerName: 'Giá',
      width: 140,
           
    },
    {
      field: 'category',
      headerName: 'Loại',
      
      width: 160,
    },
    {
      field: 'thao tác',
      headerName: 'Thao tác',
      width: 260,
      renderCell: (params) => (
        <>
          <NavLink to={`/edit/${params.row._id}`}
            className="btn btn-success"
            style={{marginRight: '20px', textDecoration: 'none', color: 'white'}}
          >
            Edit
          </NavLink>
          <button
            className="btn btn-danger"
            onClick={deleteProduct(params.row._id)}
          >
            Delete
          </button>
        </>
      ),
      
    },
  ];

  
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
    const fetchproducts = async () => {
      const { data } = await axios.get(
        "http://localhost:3002/api/products"
      );
      setProducts(data);
    };
    fetchproducts();
  }, []);

  console.log(products)

  const deleteProduct = (id) => async () => {
    try {
      await axios.delete(
        `http://localhost:3002/api/delete/${id}`
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Xoá thành công",
        showConfirmButton: false,
      });
      setTimeout(() => window.location.reload(false), 1000);
    } catch {
      swal({
        title: "Xoá thất bại!",
        icon: "error",
        button: false,
      });
    }
  };
  return (
    
    <Box sx={{ height: 625, width: "100%" }}>
      <DataGrid
      rows={products}
      getRowId={(products) => products?._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowHeight={() => 105}
      />
    </Box>
    
  );
};

export default Products;
