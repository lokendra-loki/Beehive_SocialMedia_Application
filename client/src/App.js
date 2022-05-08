import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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



//=======
// import { useState } from 'react';


// ///socialMediaAuth
// const LoginFalse = () => {
//     <h1>login please..</h1>

// }



// const LoginTrue = () => {
//     <h1>login success</h1>
// }









    



function App() {

  //social media auth
  // const [isLogin, setIsLogin] = useState(false)



  


  const { user } = useContext(Context)



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogRead" element={<BlogRead />} />
          <Route path="/blogWrite" element={<BlogWrite />} />
          <Route path="/jobPostCreate" element={<JobPostCreate />} />
          <Route path="/" element={<FeedPage />} />
          {/* <Route path="/" element={isLogin ? <FeedPage /> : <Login/>} /> */}


        </Routes>
      </Router>
    </div>
  );
}

export default App;
