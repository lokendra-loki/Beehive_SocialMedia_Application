import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import BlogRead from "./pages/blogRead/BlogRead";
import JobPostCreate from "./pages/jobPostCreate/JobPostCreate";
import JobSearchFeed from "./pages/jobSearchFeed/JobSearchFeed";
import JobPostRead from "./pages/JobPostRead/JobPostRead";
import Trending from "./pages/trending/Trending";
import Bookmark from "./pages/bookmark/Bookmark";
import JobEdit from "./pages/jobEdit/JobEdit";
import BlogEdit from "./pages/blogEdit/BlogEdit";
import Home from "./pages/home/Home";
import BlogCreate from "./pages/blogCreate/BlogCreate";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogRead/:id" element={<BlogRead />} />
          <Route path="/blogCreate" element={<BlogCreate />} />
          <Route path="/jobCreate" element={<JobPostCreate />} />
          <Route path="/jobSearch" element={<JobSearchFeed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/jobPost/:id" element={<JobPostRead />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/jobEdit/:id" element={<JobEdit />} />
          <Route path="/blogEdit/:id" element={<BlogEdit />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
