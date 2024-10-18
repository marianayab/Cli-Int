import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Maria Nayab</h4>
            <p>© {year} Maria Nayab all rights reserved.</p>
          </div>
          <div className="second mt-5">
            <h4>Get in touch</h4>
            <p>Looking forward to connect and explore opportunities.</p>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              style={{ color: "#0dcaf0" }}
            >
              mariaa.nayab001@gmail.com
            </a>
            <p>+92 322 3797278</p>
          </div>
          <div className="third mt-5">
            <h4>Follow me</h4>
            <p className="d-flex">
              <a
                href="https://www.linkedin.com/in/maria-nayab-6bb4a0278/"
                target="_blank"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "white" }}
                ></i>
              </a>
              <a href="https://github.com/marianayab" target="_blank">
                <i
                  className="fa-brands fa-github mx-3"
                  style={{ color: "white" }}
                ></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
