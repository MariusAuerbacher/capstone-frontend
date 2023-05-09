import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed mt-5" id="footer">
        <div className="footer-left">
          <h3>
            Ummati
          </h3>

 

          <p className="footer-company-name">Ummati © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Get in touch with us</span> Ummati Global
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+49 1590 6106 419</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@ummati.com">support@ummati.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Designed and Developed by Ummati</span>
           Direct and efficient support for people in need.
          </p>

          <div className="footer-icons">
            <p>
              <i className="fa fa-facebook"></i>
            </p>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
