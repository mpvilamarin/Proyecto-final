import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "react-auth-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import execute from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = execute();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider
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
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
