import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { JobPostsContextProvider } from "./context/jobPostContext/JobPostContext";
import { UserDetailContextProvider } from "./context/userDetailContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobPostsContextProvider>
        <UserDetailContextProvider>
          <App />
        </UserDetailContextProvider>
      </JobPostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
