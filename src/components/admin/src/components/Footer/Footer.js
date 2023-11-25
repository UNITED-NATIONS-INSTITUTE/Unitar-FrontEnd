
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://www.creative-tim.com" target="_blank">
                   2023 Soko Janja Delivery
                </a>
              </li>
           
            
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()}, Created by{" "}
              <i className="fa fa-heart heart" /> Ubrica
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
