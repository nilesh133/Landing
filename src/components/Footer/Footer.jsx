import React from "react";
import "./footer.css";

// icons import
import { MdArrowRightAlt } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_container">
        <div className="main_row">
          <div className="column-4">
            <div className="footer_content">
              <div className="footer_header">About Us</div>
              <div className="footer_content_about">
                <p>
                  Far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at
                  the coast of the Semantics
                </p>
              </div>
            </div>
          </div>
          <div className="column-4">
            <div className="footer_content">
              <div className="footer_header">Information</div>
              <div className="footer_content_listcontainer">
                <div className="footer_content_list">
                  <span>
                    <MdArrowRightAlt />
                  </span>
                  <p>About</p>
                </div>
                <div className="footer_content_list">
                  <span>
                    <MdArrowRightAlt />
                  </span>
                  <p>Privacy</p>
                </div>
                <div className="footer_content_list">
                  <span>
                    <MdArrowRightAlt />
                  </span>
                  <p>Terms & Conditions</p>
                </div>
                <div className="footer_content_list">
                  <span>
                    <MdArrowRightAlt />
                  </span>
                  <p>Contact</p>
                </div>
              </div>
            </div>
          </div>

          <div className="column-4">
            <div className="footer_content">
              <div className="footer_header">Contact Info</div>
              <div className="footer_content_contact">
                <p>291 South 21th Street, <br/>Suite 721 New York NY 10016</p>
              </div>
              <div className="footer_content_infolist">
                <div className="footer_content_info">
                    <span><CiMobile4/></span>
                    <p>+ 1235 2355 98</p>
                </div>
                <div className="footer_content_info">
                    <span><CiMail/></span>
                    <p>info@yoursite.com</p>
                </div>
                <div className="footer_content_info">
                    <span><SlLocationPin/></span>
                    <p>yourwebsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
