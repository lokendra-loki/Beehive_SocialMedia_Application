import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { BlogContextProvider } from "./context/blogContext";
import { JobPostsContextProvider } from "./context/jobPostContext/JobPostContext";
import { UserDetailContextProvider } from "./context/userDetailContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobPostsContextProvider>
        <UserDetailContextProvider>
          <BlogContextProvider>
            <App />
          </BlogContextProvider>
        </UserDetailContextProvider>
      </JobPostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
