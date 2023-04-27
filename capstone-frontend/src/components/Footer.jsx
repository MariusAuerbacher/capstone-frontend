import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed mt-5" id="footer">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

 

          <p className="footer-company-name">Company Name © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Fake Street</span> Epicode Global
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
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
