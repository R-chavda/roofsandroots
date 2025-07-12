import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rut5wdbp7tva64tg.us.auth0.com"
      clientId="ICRrY9NLydoQpsMTYXlZIqbB7ueDzRys"
      authorizationParams={{
        redirect_uri: "https://roofandroots.onrender.com/",
      }}
      audience="https://roofsandroots.onrender.com"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
