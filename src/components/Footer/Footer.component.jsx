import React from "react";
import "./Footer.css";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="main_container">
      <MDBFooter className="font-small pt-4  footer_background">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">OUR CONTACT</h5>
              <p>You can connect our admin through this sites</p>
              <li className="list-unstyled">
                GMAIL = <a href="#!">eaglerebirthretreat@gmail.com</a>
              </li>
              <li className="list-unstyled">
                PH ={" "}
                <a href="#!">+919088213423, +917602386665, +918637839708</a>
              </li>
              <li className="list-unstyled">
                FACEBOOK PAGE =
                <a
                  href="https://www.facebook.com/eaglerebirthindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/eaglerebirthindia/
                </a>
              </li>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">OUR RESOURCES</h5>
              <ul>
                <li className="list-unstyled">
                  YOUTUBE =
                  <a
                    href="https://www.youtube.com/channel/UC_cLZrmA_z6cht512hSmoKw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.youtube.com/channel/UC_cLZrmA_z6cht512hSmoKw
                  </a>
                </li>
                <li className="list-unstyled">
                  FACEBOOK GROUP =
                  <a
                    href="https://www.facebook.com/groups/663006377984604/?ref=share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.facebook.com/groups/663006377984604/?ref=share
                  </a>
                </li>
                <li className="list-unstyled">
                  INSTAGRAM ={" "}
                  <a
                    href="https://www.instagram.com/vasudhaiva_kutumbakam__/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.instagram.com/vasudhaiva_kutumbakam__/{" "}
                  </a>
                </li>
                <li className="list-unstyled">
                  TWITTER ={" "}
                  <a
                    href="https://mobile.twitter.com/rebirth_eagle?s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://mobile.twitter.com/rebirth_eagle?s=08
                  </a>
                </li>
                <li className="list-unstyled">
                  TELEGRAM ={" "}
                  <a
                    href="https://t.me/MSEFOnline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://t.me/MSEFOnline
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="display_flex">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#!"> EAGLEREBIRTH.com </a>
            <p>Developed By SUVRAJIT</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
