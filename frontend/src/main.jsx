import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import WouterRouter from "./components/wouter-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <WouterRouter />
    </ChakraProvider>
  </StrictMode>
);
