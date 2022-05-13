import React, { useContext, useState } from 'react'
import "./login.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { AuthContext } from '../../context/authContext/AuthContext';
import { loginCall } from "../../apiCalls"
import CircularProgress from '@mui/material/CircularProgress';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    //Sending data to server for login
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { user, dispatch, isFetching } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        loginCall({ username, password }, dispatch)
        navigate("/")
    }
    console.log(user)


    return (
        <div className='loginPage'>
            <div className="lpWrapper">
                <div className="lpLeft">
                    <div className="lpLeftRow1">
                        <img className='logo' src="assets/logo.svg" alt="" />
                    </div>

                    <form className="loginContainer" >
                        <img className='logoIcon' src="assets/logo-icon.svg" alt="" />
                        <span className='welcomeTxt'>Welcome</span>
                        <span className="loginDesc">Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits. Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
                        </span>

                        <div className="loginInputCon">
                            <div className="inputIconCon">
                                <PersonOutlinedIcon className='lpInput-icon' />
                            </div>
                            <input className="lpInput" type="text" name='username' onChange={(e) => setUsername(e.target.value)} placeholder='Email or username' />
                        </div>

                        <div className="loginInputCon">
                            <div className="inputIconCon">
                                <KeyOutlinedIcon className='lpInput-icon' />
                            </div>
                            <input className="lpInput" type="password" placeholder="Password" name='password'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button className='loginBut' onClick={handleLogin}  >{isFetching ? <CircularProgress className='loginCircularProgress' size="1.4rem" color="inherit" /> : "Log into your account"}</button>

                        <div className="checkboxAndForgetCon">
                            <div className="checkboxCon">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
                                <label htmlFor="vehicle1">Remember</label>
                            </div>
                            <span className='forgotPass'>Forgot Password ?</span>
                        </div>

                        <Link to="/register" className='link'>
                            <button className='loginBut'>Create an account</button>
                        </Link>

                        <span className="socialMediaAuthTxt">Or login with</span>
                        <div className="socialMediaAuthCon">
                            <GoogleIcon className='socialMediaAuthIcon' />
                            <GitHubIcon className='socialMediaAuthIcon' />
                            <FacebookIcon className='socialMediaAuthIcon' />
                        </div>
                    </form>
                </div>
                <div className="lpRight">right</div>
            </div>
        </div>
    )
}

export default Login





//Alternative=====================================================>
// import React, { useContext, useState } from 'react'
// import "./login.scss"
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
// import { AuthContext } from '../../context/authContext/AuthContext';
// import { loginCall } from "../../apiCalls"
// import CircularProgress from '@mui/material/CircularProgress';
// import GoogleIcon from '@mui/icons-material/Google';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { Link, useNavigate } from 'react-router-dom';


// function Login() {
//     //Sending data to server for login
//     const [inputes, setInputes] = useState({
//         username: "",
//         password: ""
//     })

//     const handleInputesChange = (e) => {
//         setInputes({ ...inputes, [e.target.name]: e.target.value })
//     }

//     const { user, dispatch, isFetching } = useContext(AuthContext)
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         loginCall(inputes, dispatch)
//         navigate("/")
//     }
//     console.log(user)


//     return (
//         <div className='loginPage'>
//             <div className="lpWrapper">
//                 <div className="lpLeft">
//                     <div className="lpLeftRow1">
//                         <img className='logo' src="assets/logo.svg" alt="" />
//                     </div>

//                     <form className="loginContainer" >
//                         <img className='logoIcon' src="assets/logo-icon.svg" alt="" />
//                         <span className='welcomeTxt'>Welcome</span>
//                         <span className="loginDesc">Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits. Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
//                         </span>

//                         <div className="loginInputCon">
//                             <div className="inputIconCon">
//                                 <PersonOutlinedIcon className='lpInput-icon' />
//                             </div>
//                             <input className="lpInput" type="text" name='username' onChange={handleInputesChange} placeholder='Email or username' />
//                         </div>

//                         <div className="loginInputCon">
//                             <div className="inputIconCon">
//                                 <KeyOutlinedIcon className='lpInput-icon' />
//                             </div>
//                             <input className="lpInput" type="password" placeholder="Password" name='password'
//                                 onChange={handleInputesChange} />
//                         </div>

//                         <button className='loginBut' onClick={handleSubmit}  >{isFetching ? <CircularProgress className='loginCircularProgress' size="1.4rem" color="inherit" /> : "Log into your account"}</button>

//                         <div className="checkboxAndForgetCon">
//                             <div className="checkboxCon">
//                                 <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
//                                 <label htmlFor="vehicle1">Remember</label>
//                             </div>
//                             <span className='forgotPass'>Forgot Password ?</span>
//                         </div>

//                         <Link to="/register" className='link'>
//                             <button className='loginBut'>Create an account</button>
//                         </Link>

//                         <span className="socialMediaAuthTxt">Or login with</span>
//                         <div className="socialMediaAuthCon">
//                             <GoogleIcon className='socialMediaAuthIcon' />
//                             <GitHubIcon className='socialMediaAuthIcon' />
//                             <FacebookIcon className='socialMediaAuthIcon' />
//                         </div>
//                     </form>
//                 </div>
//                 <div className="lpRight">right</div>
//             </div>
//         </div>
//     )
// }

// export default Login