import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import SidebarContextProvider from "./contexts/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </SidebarContextProvider>
  </StrictMode>
);
