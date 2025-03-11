import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} href="/">
          <img src="/logo.png" alt="Swahilipot Logo" width="120" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto">
            <NavDropdown title="Programs" id="programs-dropdown">
              <NavDropdown.Item as={Link} href="#">Program 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Program 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="#">Adverts</Nav.Link>
            <Nav.Link as={Link} href="#">SwahilipotFM</Nav.Link>

            <NavDropdown title="Departments" id="departments-dropdown">
              <NavDropdown.Item as={Link} href="/departments/community-experience">
                Community Experience
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Swahilipot" id="about-dropdown">
              <NavDropdown.Item as={Link} href="#">Our Story</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Side Buttons */}
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} href="#">Join Our Youth Database</Nav.Link>
            <Button variant="primary" className="ms-3">
              📖 Blogs and News
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
