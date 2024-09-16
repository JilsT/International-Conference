import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'; 
import './Navbar.css';

const AppNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="home-navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey="2">HOME</Nav.Link>
                        <Nav.Link href="#paper">PAPER SUBMISSION</Nav.Link>
                        <Nav.Link href="#registration">REGISTRATION</Nav.Link>
                        <Nav.Link href="#committees">COMMITTEES</Nav.Link>
                        <Nav.Link href="#dates">IMPORTANT DATES/SCHEDULES</Nav.Link>
                        <Nav.Link href="#contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;