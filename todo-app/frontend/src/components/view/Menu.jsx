import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default props => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
                <FontAwesomeIcon icon={faCalendarCheck}className="me-2"/>TodoApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#/content">Content</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
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