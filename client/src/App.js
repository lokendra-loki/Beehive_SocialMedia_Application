import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";
import Blogs from "./pages/blogs/Blogs";
import BlogRead from "./pages/blogRead/BlogRead";
import BlogWrite from "./pages/blogWrite/BlogWrite";
import JobPostCreate from "./pages/jobPostCreate/JobPostCreate";
import FeedPage from "./pages/feedPage/FeedPage";
import { useContext } from "react";
import { Context } from "./context/Context";
import JobSearchFeed from "./pages/jobSearchFeed/JobSearchFeed";
import JobPostRead from "./pages/JobPostRead/JobPostRead";



function App() {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogRead/:id" element={<BlogRead />} />
          <Route path="/blogWrite" element={<BlogWrite />} />
          <Route path="/jobCreate" element={<JobPostCreate />} />
          <Route path="/jobSearch" element={<JobSearchFeed />} />
          <Route path="/jobPost/:id" element={<JobPostRead />} />
          <Route path="/" element={<FeedPage />} />
         
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
