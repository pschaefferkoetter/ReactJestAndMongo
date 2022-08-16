import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);