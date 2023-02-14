import { createRoot } from 'react-dom/client';

//Importing Mainview
import { MainView } from "./src/components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`

import {Container} from 'react-bootstrap';


import "./index.scss";

import { store } from "./redux/store";
import { Provider } from 'react-redux';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <Provider className="my-flix">
            <Container>
                <MainView></MainView>
            </Container>
        </Provider>
    );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);


