// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";

// Here is out base App component.
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);