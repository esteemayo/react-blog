import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Blog</h5>
            <p className="grey-text text-lighten-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna
              felis, mattis eu consectetur eget, pulvinar vel nulla. Morbi
              euismod ex dui, a sodales erat maximus ut.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {date.getFullYear()} Copyright. All right reserved. Design by
          Emmanuel Adebayo&trade;
          <Link className="grey-text text-lighten-4 right" to="/">
            More Links
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
