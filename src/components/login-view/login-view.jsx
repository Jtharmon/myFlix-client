import React from "react";
import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";



export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        console.log("I am here")
        //this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
        const data = {
            access: username,
            secret: password
        };
        console.log(data)
        fetch("https://movie-api1.herokuapp.com/login?Username=" + data.access + "&Password=" + data.secret, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response: ", data);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                    alert("You have been forcefully logged in");
                    onLoggedIn(data.user, data.token);
                } else {
                    alert("no such user");
                }
                if (response.ok) {
                    dispatch(setUser(username));
                } else {
                    alert("Login failed");
                }
            })
            .catch((e) => {
                alert("Something went wrong")
            });
    };




    return (
        <Row>
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
