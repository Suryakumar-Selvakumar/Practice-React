import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Food } from "./Food.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
    <h1>Test title</h1>
    <svg>
      <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
    </svg>
    <form>
      <input type="text"/>
    </form>
    </div>
  </StrictMode>
);
