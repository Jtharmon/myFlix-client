import { createRoot } from "react-dom/client";
import React from "react";
import Container from "react-bootstrap/Container";

import * as bootstrap from "bootstrap";
import { MainView } from "./src/components/main-view/main-view";

const MyFlixApplication = () => {
    return (
        <Container fluid className="min-vh-100">
            <MainView />
        </Container>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);