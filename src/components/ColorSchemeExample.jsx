import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand ><NavLink to="/home"><h1>MicroTech</h1></NavLink></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><NavLink to="/products">Products</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/about">About Us</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/contact">Contact Us</NavLink></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;


