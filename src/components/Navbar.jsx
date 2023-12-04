import { Nav, Navbar, Container, Badge } from "react-bootstrap"
import { useSelector } from "react-redux";

const NavBar = () => {
  const { totalQuantity } = useSelector((state) => state.cart)
  
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container className="text-white">
      <Navbar.Brand href="/#">FakeStore API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/#">Inicio</Nav.Link>
        </Nav>
        <Nav.Link href="/#cart">Cesta: <Badge pill bg="primary">{totalQuantity}</Badge></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
