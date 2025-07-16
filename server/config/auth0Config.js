import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://roofsandroots.onrender.com",
  issuerBaseURL: "https://dev-rut5wdbp7tva64tg.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
