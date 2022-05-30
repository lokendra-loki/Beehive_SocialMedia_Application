import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { JobPostsContextProvider } from "./context/jobPostContext/JobPostContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobPostsContextProvider>
        <App />
      </JobPostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
