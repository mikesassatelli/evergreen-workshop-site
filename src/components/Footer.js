import { Component } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return(
            <div className="fixed-bottom">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand>&copy; Evergreen Workshop</NavbarBrand>
                    </Container>
                </Navbar>
            </div>    
        )
    }
}