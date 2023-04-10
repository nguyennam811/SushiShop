import React from 'react';
// import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        // <div>
        //     <footer className="my-5 pt-5 text-muted text-center text-small">
        //         <p className="mb-1">© 2017-2022 V&T Restaurant</p>
        //         <ul className="list-inline">
        //             <li className="list-inline-item"><NavLink to="/products" style={{textDecoration: "none"}}>Sản phẩm</NavLink></li>
        //             <li className="list-inline-item"><NavLink to="about" style={{textDecoration: "none"}}>Giới thiệu</NavLink></li>
        //             <li className="list-inline-item"><NavLink to="contact" style={{textDecoration: "none"}}>Liên hệ</NavLink></li>
        //         </ul>
        //     </footer>
        // </div>
        <div>
            <section className="footer">
                <div className="media">
                    <p>Title here</p>
                    <p style={{padding: '5% 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id incidunt cum, nulla officia saepe aliquam eveniet, doloremque quos modi consequatur ipsum rem </p>
                    <i className="fa-brands fa-instagram" /> 
                    <i className="fa-brands fa-facebook" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-whatsapp" />
                </div>
                <div className="about">
                    <p style={{paddingBottom: '5%'}}>About</p>
                    <a href="#">History</a>
                    <br />
                    <a href="#">Our Team</a>
                    <br />
                    <a href="#">Brand Guidelines</a>
                    <br />
                    <a href="#">Terms &amp; Condition</a>
                    <br />
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="service">
                    <p style={{paddingBottom: '5%'}}>Services</p>
                    <a href="#">How to Order</a>
                    <br />
                    <a href="#">Our Product</a>
                    <br />
                    <a href="#">Order Status</a>
                    <br />
                    <a href="#">Promo</a>
                    <br />
                    <a href="#">Payment Method</a>
                </div>
                <div className="other">
                    <p style={{paddingBottom: '5%'}}>Other</p>
                    <a href="#">Contact Us</a>
                    <br />
                    <a href="#">Help</a>
                    <br />
                    <a href="#">Privacy</a>
                </div>
            </section>
      </div>
    );
}

export default Footer;
