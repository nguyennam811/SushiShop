import React from 'react';
// import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
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
