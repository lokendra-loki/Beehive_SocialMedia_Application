import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";
import Blogs from "./pages/blogs/Blogs";
import BlogRead from "./pages/blogRead/BlogRead";
import BlogWrite from "./pages/blogWrite/BlogWrite";
import JobPostCreate from "./pages/jobPostCreate/JobPostCreate";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/blogRead" element={<BlogRead />} />
          <Route path="/blogWrite" element={<BlogWrite />} />
          <Route path="/jobPostCreate" element={<JobPostCreate />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
