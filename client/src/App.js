import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";
import Blogs from "./pages/blogs/Blogs";
import BlogRead from "./pages/blogRead/BlogRead";
import BlogWrite from "./pages/blogWrite/BlogWrite";
import JobPostCreate from "./pages/jobPostCreate/JobPostCreate";
import FeedPage from "./pages/feedPage/FeedPage";
import JobSearchFeed from "./pages/jobSearchFeed/JobSearchFeed";
import JobPostRead from "./pages/JobPostRead/JobPostRead";
import Trending from "./pages/trending/Trending";
import Bookmark from "./pages/bookmark/Bookmark";
import JobEdit from "./pages/jobEdit/JobEdit";
import BlogEdit from "./pages/blogEdit/BlogEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogRead/:id" element={<BlogRead />} />
          <Route path="/blogWrite" element={<BlogWrite />} />
          <Route path="/jobCreate" element={<JobPostCreate />} />
          <Route path="/jobSearch" element={<JobSearchFeed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/jobPost/:id" element={<JobPostRead />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/jobEdit/:id" element={<JobEdit />} />
          <Route path="/blogEdit/:id" element={<BlogEdit />} />
          <Route path="/" element={<FeedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
