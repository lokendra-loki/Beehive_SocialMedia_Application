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
import FeedPostEdit from "./pages/feedPostEdit/FeedPostEdit";
import Settings from "./pages/settings/Settings";
import Categories from "./pages/categories/Categories";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={user ? <Home />: <Register />} />
          <Route path="/profile/:id" element={user ? <Profile /> : <Register />} />
          <Route path="/blogs" element={user ? <Blogs /> : <Register />} />
          <Route path="/blogRead/:id" element={user ? <BlogRead /> : <Register />} />
          <Route path="/blogCreate" element={user ? <BlogCreate /> : <Register />} />
          <Route path="/jobCreate" element={user ? <JobPostCreate /> : <Register />} />
          <Route path="/jobSearch" element={user ? <JobSearchFeed /> : <Register />} />
          <Route path="/trending" element={user ? <Trending /> : <Register />} />
          <Route path="/jobPost/:id" element={user ? <JobPostRead /> : <Register />} />
          <Route path="/bookmark" element={user ? <Bookmark /> : <Register />} />
          <Route path="/jobEdit/:id" element={user ? <JobEdit /> : <Register />} />
          <Route path="/blogEdit/:id" element={user ? <BlogEdit /> : <Register />} />
          <Route path="/profileEdit" element={user ? <ProfileEdit /> : <Register />} />
          <Route path="/postEdit/:id" element={user ? <FeedPostEdit /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/category/:catName" element={user ? <Categories /> : <Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
