import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";


export default props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand >
                <FontAwesomeIcon icon={faCalendarCheck}className="me-2"/>TodoApp
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link >Content</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link >About</Nav.Link>
              </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    // return(
    //     <nav className="navbar navbar-inverse bg-inverse">
    //         <div className="container">
    //             <div className="navbar-header">
    //                 <a className="navbar-brand" href="#">
    //                 <FontAwesomeIcon icon={faCalendarCheck}className="me-2"/>TodoApp
                        
      
                        
    //                 </a>

    //             </div>
    //         </div>
    //     </nav>
    // )
}