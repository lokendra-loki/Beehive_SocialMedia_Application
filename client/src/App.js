import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/register/Register";
import UserProfile from "./pages/userProfile/UserProfile";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
