import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const deploymentUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_CONVEX_URL
    : process.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(deploymentUrl);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
