import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Modal, NavDropdown } from 'react-bootstrap';
import AppointmentSchedule from './Dashboard/Components/AppointmentSchedule.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const [userRoles, setUserRoles] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const roles = JSON.parse(localStorage.getItem('userRoles')) || [];
    setUserRoles(roles);
    setToken(localStorage.getItem('token'));
  }, [token]);

  const isAdmin = userRoles.includes('Administrator');
  const isDoctor = userRoles.includes('Doctor');
  const isUser = token && !isAdmin && !isDoctor;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRoles');
    setUserRoles([]);
    setToken(null);
    navigate('/');
  };

  const handleMakeAppointment = () => setShowAppointmentModal(true);
  const handleCloseAppointmentModal = () => setShowAppointmentModal(false);

  return (
    <header>
      <Navbar className="navbar-leaf-green mb-1" variant="dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">HealthFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/AboutUs">About</Nav.Link>
              <Nav.Link as={NavLink} to="/OurDoctors">Our Doctors</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>

              {isAdmin && <Nav.Link as={NavLink} to="/AdminDashboard">Admin Dashboard</Nav.Link>}
              {isDoctor && <Nav.Link as={NavLink} to="/Dashboard">Doctor Dashboard</Nav.Link>}
            </Nav>

            <Nav className="ms-auto align-items-center">
              {isUser && (
                <Button variant="success" className="me-2" onClick={handleMakeAppointment}>
                  Make an Appointment
                </Button>
              )}

              {token ? (
                <NavDropdown title="Account" align="end">
                  <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/RegisterForm">Register</Nav.Link>
                  <Nav.Link as={NavLink} to="/LoginForm">Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Appointment Modal */}
      <Modal show={showAppointmentModal} onHide={handleCloseAppointmentModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentSchedule onSuccess={handleCloseAppointmentModal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAppointmentModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
