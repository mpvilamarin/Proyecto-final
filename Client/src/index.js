import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from './redux/store/index'
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import execute from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const { store, persistor } = execute();
root.render(
  <Auth0Provider
    domain="petrescueconnect.us.auth0.com"
    clientId="VhBi9ptBLdnm7VtcQYopEpdrGMLxooIY"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    authName={"_auth"}
    authType={"cookie"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
