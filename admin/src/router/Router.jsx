// import React from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Order from "./pages/order/Order";
// import Products from "./pages/products/Products";
// import Login from "./pages/login/Login";
// import Navbar from "./pages/navbar/Navbar";
// import Upload from './pages/upload/Upload';
// import Edit from "./pages/edit/Edit";


// function Router() {
//   return (
//     <Router>
       
//         <Navbar />
//         <Routes>
//           <Route path='/login' element = { <Login />} />
//           <Route path="/product" element = { <Products />} />
//           <Route path='/order' element = { <Order />} />
//           <Route path='/upload' element = { <Upload />} />
//           <Route path='/edit/:id' element = { <Edit />} />
//         </Routes>
   
//     </Router>
//   );
// }

// export default Router;

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import Order from "../pages/order/Order";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import Upload from '../pages/upload/Upload';
import Edit from "../pages/edit/Edit";

function Router() {
  return (
    <div >
        <Routes>
          <Route path="/product" element = { <Products />} />
          <Route path='/order' element = { <Order />} />
          <Route path='/contact' element = { <Contact />} />
          <Route path='/upload' element = { <Upload />} />
          <Route path='/edit/:id' element = { <Edit />} />
        </Routes>
    </div>

    
  )
}
export default Router;
