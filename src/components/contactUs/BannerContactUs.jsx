// import { fontSize } from '@mui/system';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BannerContactUs = () => {

  const navbarStyle = {
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "400px",
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" style={navbarStyle}>
        <Container>
          <Navbar.Brand >CONTACT US</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  )
}

export default BannerContactUs;





