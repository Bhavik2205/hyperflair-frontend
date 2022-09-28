import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/main.css";
import "jquery/dist/jquery.slim.js";
import "@popperjs/core/lib/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/js/main.js";

import App from "./App";
import { StrictMode } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { createRoot } from "react-dom/client";
import { ethers } from "ethers";
import reportWebVitals from "./reportWebVitals";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </StrictMode>
);

reportWebVitals();
