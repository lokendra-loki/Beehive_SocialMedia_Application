import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";
import Blogs from "./pages/blogs/Blogs";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/blogs" element={<Blogs />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
