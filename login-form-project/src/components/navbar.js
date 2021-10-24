import React from 'react';

export default class navBar extends React.Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Welcome to myApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#happyplace">Happy Place</Nav.Link>
                        <Nav.Link href="#about">about</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}