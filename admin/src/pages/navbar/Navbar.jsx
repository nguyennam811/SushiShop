import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, theme, Row, Col, Avatar } from "antd";
import React, { useState } from "react";
import "./Navbar.css";
// import Router from "../router/Router";
import { Link } from "react-router-dom";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import PersonIcon from '@mui/icons-material/Person';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/apiRequest";
import { createAxios } from "../../instance/createinstance";
import { logOutSuccess } from "../../redux/authSlice";

import Router from "../../router/Router";
// import App from "../../App";

const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedItem, setSelectedItem] = useState('dashboard');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const user = useSelector((state) => state.auth.login.currentUser);

  // const user = true;
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };

  return (
    <div>
      <nav className="" style={{ paddingTop: "0 !important " }}>
        <div>

          {user ? (
            <>

              <Layout>
                <Sider
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                  style={{ backgroundColor: "white" }}
                >
                  {!collapsed && (
                    <NavLink className="logo" to="/">
                      Admin
                    </NavLink>
                  )}
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                      color: "black",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Admin Manager
                      </ListSubheader>
                    }
                  >
                    <Link to="/">
                      <ListItemButton
                        selected={selectedItem === "dashboard"}
                        onClick={() => handleItemClick("dashboard")}
                      >
                        <ListItemIcon>
                          <DashboardIcon />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="Dashboard" />}
                      </ListItemButton>
                    </Link>

                    <Link to="/user">
                      <ListItemButton
                        selected={selectedItem === "user"} // check if this is the selected item
                        onClick={() => handleItemClick("user")}
                      >
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="User" />}
                      </ListItemButton>
                    </Link>

                    <Link to="/product">
                      <ListItemButton
                        selected={selectedItem === "products"} // check if this is the selected item
                        onClick={() => handleItemClick("products")}
                      >
                        <ListItemIcon>
                          <ProductionQuantityLimitsIcon />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="Products" />}
                      </ListItemButton>
                    </Link>

                    <Link to="/order">
                      <ListItemButton
                        selected={selectedItem === "Order"} // check if this is the selected item
                        onClick={() => handleItemClick("Order")}
                      >
                        <ListItemIcon>
                          <RequestQuoteIcon />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="Order" />}
                      </ListItemButton>
                    </Link>

                    <Link to="/contact">
                      <ListItemButton
                        selected={selectedItem === "Contact"} // check if this is the selected item
                        onClick={() => handleItemClick("Contact")}
                      >
                        <ListItemIcon>
                          <ConnectWithoutContactIcon />
                        </ListItemIcon>
                        {!collapsed && <ListItemText primary="Contact" />}
                      </ListItemButton>
                    </Link>
                  </List>
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                      color: "black",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Create
                      </ListSubheader>
                    }
                  >
                    <Link to="/upload">
                      <ListItemButton
                        selected={selectedItem === "Create Product"}
                        onClick={() => handleItemClick("Create Product")}
                      >
                        <ListItemIcon>
                          <UpgradeIcon />
                        </ListItemIcon>
                        {!collapsed && (
                          <ListItemText primary="Create Product" />
                        )}
                      </ListItemButton>
                    </Link>
                  </List>
                </Sider>
                <Layout className="site-layout">
                  <Header
                    style={{
                      padding: 0,
                      background: colorBgContainer,
                    }}
                  >
                    <Row>
                      <Col md={18}>
                        {React.createElement(
                          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                          {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                          }
                        )}
                      </Col>
                      <Col md={6}>
                        <div>
                          <Avatar
                            size="default"
                            icon={<UserOutlined />}
                          ></Avatar>
                          <button className="btn ms-2 btn-outline-light">
                            {" "}
                            <i class="fa fa-user"></i>
                            <span> {user.username} </span>
                          </button>
                          <NavLink
                            to="/logout"
                            className="ms-2"
                            onClick={handleLogout}
                          >
                            <button className="btn ms-2 btn-outline-secondary">
                              {" "}
                              <i className="fa fa-sign-out me-1"></i>
                              <span> Log out </span>
                            </button>
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Header>
                  <Content
                    style={{
                      margin: "24px 16px",
                      padding: 24,
                      minHeight: "100vh",
                      background: colorBgContainer,
                    }}
                  >
                    <Router />
                  </Content>
                </Layout>
              </Layout>
            </>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="logoOut">Admin </div>
              <Link
                to="/login"
                className="btn btn-outline-dark ms-2"
                style={{
                  marginTop: "16px",
                  height: "37px",
                  marginRight: "88px",
                }}
              >
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "../../redux/apiRequest";
// import { createAxios } from "../../instance/createinstance";
// import { logOutSuccess } from "../../redux/authSlice";

// const Navbar = () => {
//   // Login
//   // const user = useSelector((state) => state.auth.login.currentUser);
//   const user = useSelector((state) => state.auth.login.currentUser);

//   // const user = true;
//   const accessToken = user?.accessToken;
//   const id = user?._id;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let axiosJWT = createAxios(user, dispatch, logOutSuccess);
//   const handleLogout = () => {
//     logOut(dispatch, id, navigate, accessToken, axiosJWT);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
//         <div className="container">
//           <NavLink className="navbar-brand fw-bold fs-4" to="/">
//             Admin Page
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {user ? (
//             <>
//               <div
//                 className="collapse mx-auto navbar-collapse"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav  mb-2 fw-bolder d-flex justify-content-around">
//                   <li className="nav-item">
//                     <NavLink className="btn btn-outline-dark ms-2" to="/order">
//                       Yêu cầu
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink to="/product" className="btn btn-outline-dark ms-2">
//                     Sản phẩm
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//               <NavLink to="/upload" className="btn btn-outline-dark ms-2">
//                 Thêm sản phẩm mới
//               </NavLink>
//               <button className="btn ms-2 btn-outline-dark">
//                 {" "}
//                 <i class="fa fa-user"></i>
//                 <span> {user.username} </span>
//               </button>
//               {/* <p className="navbar-user">Hi, <span> {user.username}  </span> </p> */}
//               <NavLink
//                 to="/logout"
//                 className="ms-2"
//                 style={{ textDecoration: "none" }}
//                 onClick={handleLogout}
//               >
//                 <button className="btn ms-2 btn-outline-dark">
//                   {" "}
//                   <i className="fa fa-sign-out me-1"></i>
//                   <span> Log out </span>
//                 </button>
//               </NavLink>
//             </>
//           ) : (
//             <>
//               <NavLink to="/login" className="btn btn-outline-dark ms-2">
//                 <i className="fa fa-sign-in me-1"></i> Login
//               </NavLink>
//             </>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
