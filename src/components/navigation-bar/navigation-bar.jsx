import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import myFlixLogo from "./MyFlix-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";


const NavigationBar = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <Navbar
            expand="lg"
            className="navbar"
            variant="dark"
            style={{ backgroundColor: "#374140" }}
        >
            <Container fluid>
                <Navbar.Brand>
                    <Image
                        src={myFlixLogo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="MyFlix logo"
                        rounded
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!username && (
                            <React.Fragment>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Signup
                                </Nav.Link>
                            </React.Fragment>
                        )}
                        {username && (
                            <React.Fragment>
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link onClick={() => dispatch(setUser(null))}>
                                    Logout
                                    </Nav.Link>
                            </React.Fragment>
                        )}
                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link as={Link} to="/profile">
                            <span>{username}</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/profile">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-person-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;