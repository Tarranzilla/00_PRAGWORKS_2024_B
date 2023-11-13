import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="Navbar">
                <h2>NAVBAR</h2>
            </div>
            <div className="Main_Section">
                <h1>HUMAN ROBOTICS</h1>
            </div>
            <div className="Footer">FOOTER</div>
        </>
    );
}

export default App;
