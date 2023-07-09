import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar(){
    return(
        <Navbar    expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Let's Do It</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'>
                <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/create-tasks'>
                <Nav.Link>Create Task</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/view-tasks'>
                <Nav.Link>View Tasks</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}