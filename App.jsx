import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./App.css";

// Child component using Props
function Welcome({ name }) {
    return <h2>Welcome, {name}!</h2>;
}

// Home component
function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Home - My Website";
    }, []);

    return (
        <div>
            <h2>Home Page</h2>

            <Welcome name="Student" />

            <p>Button clicked: {count} times</p>

            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

// About component
function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>This is a React single-page website.</p>
        </div>
    );
}

// Main application
function App() {
    return (
        <BrowserRouter>

            <div className="container">

                <h1>My React Website</h1>

                <nav>
                    <Link to="/">Home</Link>
                    {" | "}
                    <Link to="/about">About</Link>
                </nav>

                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
