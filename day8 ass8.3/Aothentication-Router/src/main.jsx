import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "./Context/ContextStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <RouterProvider>
          <App />
        </RouterProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
