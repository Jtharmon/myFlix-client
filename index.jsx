import { createRoot } from 'react-dom/client';

//Importing Mainview
import { MainView } from "./src/components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`

import {Container} from 'react-bootstrap';


import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <Container>
                <MainView></MainView>
            </Container>
        </div>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);


