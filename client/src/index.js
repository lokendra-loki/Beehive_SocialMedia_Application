import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { UserDetailContextProvider } from "./context/userDetails/UserDetailsContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <UserDetailContextProvider> */}
        <App />
      {/* </UserDetailContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);