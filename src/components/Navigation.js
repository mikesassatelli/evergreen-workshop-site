import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Navigation extends Component {
    render() {
        return <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="logo.png"
                            width="5%"
                            height="5%"
                            className="d-inline-block align-top"
                        />{' '}
                        Evergreen Workshop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>

                            <NavDropdown title="Other" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Link 1</NavDropdown.Item>
                                <NavDropdown.Item href="/">Link 2</NavDropdown.Item>
                                <NavDropdown.Item href="/">Link 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    }
}