import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import {Nav, Navbar} from 'react-bootstrap'
import PDF from '../src/imgs/MaitraPatelResume.pdf'
const NavbarItem = props => (
    <Link
      activeClass="active"
      to={`${props.page}`}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <Navbar.Brand className = "navItem" href={"#" + props.page}>{props.page}</Navbar.Brand>
    </Link>
);

class FixedNav extends React.Component {
    render() {
        let { pages = []} = this.props;
        let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />);
        return(
            <Navbar className = "navColor" fixed = "top" collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center">
                        {navbarItems}
                        <Navbar.Brand className = "navItem" href={PDF} target = "_blank">Resume</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
FixedNav.propTypes = {
    pages: PropTypes.array.isRequired,
  };
export default FixedNav;