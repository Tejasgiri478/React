import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import ScrollLinked from "./frammer.jsx";
// import ExitAnimation from "./ExitAnimation.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ScrollLinked /> */}
    {/* <ExitAnimation /> */}
  </StrictMode>
);
