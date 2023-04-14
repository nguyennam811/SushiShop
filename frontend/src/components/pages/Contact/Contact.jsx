import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import axios from "axios";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";




const Contact = () => {
    

    const [result, showResult] = useState(false);
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    // emailjs.sendForm('service_azdh6u8', 'template_r3ouf4r', form.current, 'fYxKM9qKZDgyWjYoc')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    //   form.current.reset();
    //   showResult(true);
    // }
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
          fullName: "",
          phoneNumber: "",
          email: "",
          notes: "",
        },
        validationSchema: Yup.object({
          fullName: Yup.string().required("Không được bỏ trống ô này").min(4, ("Vui lòng nhập họ và tên")),
          phoneNumber: Yup.string().required("Không được bỏ trống ô này").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[./[0-9]*$/, "Vui lòng nhập đúng số điện thoại"),
          email: Yup.string().required("Không được bỏ trống ô này"),
          notes: Yup.string(),          
        }),
        onSubmit: async (values) => {
      
            try {
              await axios.post('http://localhost:3002/api/import/contact', values);
              swal({
                title: "Gửi thành công! Nhân viên sẽ liên hệ với bạn sau",
                icon: "success",
              });
              navigate('/'); 
          } catch (err) {
              
              swal({
                title: "Gửi thất bại!",
                icon: "error",
              });
          }
          }
        })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Thông tin liên hệ</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/Contact/contact.png" alt="Contact Us" height="300px" width="300px"/>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
              <label htmlFor="name">Họ và Tên</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                spellCheck="false"
                id ="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                />
                {formik.errors.fullName && (
                  <p style={{color: "red"}}>{formik.errors.fullName}</p>
                )}
               
            </div>
            <div className="mb-3">
              <label htmlFor="email">Số Điện Thoại</label>
              <input
                type="number"
                className="form-control"
                placeholder="0123456789"
                spellCheck="false"
                id ="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.phoneNumber && (
                  <p style={{color: "red"}}>{formik.errors.phoneNumber}</p>
                )}

                            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                spellCheck="false"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.address && (
                  <p style={{color: "red"}}>{formik.errors.email}</p>
                )}
            </div>
                            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Nội dung
              </label>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                spellCheck="false"
                name="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
              ></textarea>
            </div>
                            <button type="submit" class="btn btn-outline-dark" value="Send" onClick={formik.handleSubmit}>Sent</button>   
                            {/* <div className="row">{result ? <Result /> : null} </div> */}
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Contact;

// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';
// import { useRef } from "react";

// const Result =() =>{
//     return(
//         <p>Gửi Thành Công</p>
//     )
// }


// const Contact = () => {
    

//     const [result, showResult] = useState(false);
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//     emailjs.sendForm('service_azdh6u8', 'template_r3ouf4r', form.current, 'fYxKM9qKZDgyWjYoc')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       form.current.reset();
//       showResult(true);
//     }

//     return (
//         <div>
//             <div className="container mb-5">
//                 <div className="row">
//                     <div className="col-12 text-center py-4 my-4">
//                         <h1>Thông tin liên hệ</h1>
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5 d-flex justify-content-center">
//                         <img src="/assets/Contact/contact.png" alt="Contact Us" height="300px" width="300px"/>
//                     </div>
//                     <div className="col-md-6">
//                         <form ref={form} onSubmit={sendEmail}>
//                             <div className="mb-3">
//                                 <label for="exampleForm" className="form-label" >Họ và Tên</label>
//                                 <input type="text" className="form-control" id="exampleForm" placeholder="" name="fullName"/>
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label" >Số điện Thoại Liên Hệ</label>
//                                 <input type="number" className="form-control" placeholder="0123456789" name="phone" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label" >Email</label>
//                                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="exampleFormControlTextarea1" className="form-label" >Nội dung</label>
//                                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name= "message"></textarea>
//                             </div>
//                             <button type="submit" class="btn btn-outline-dark" value="Send">Sent</button>   
//                             <div className="row">{result ? <Result /> : null} </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;