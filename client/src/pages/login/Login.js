import React, { useContext, useRef } from 'react'
import "./login.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Context } from '../../context/Context';
import { loginCall } from "../../apiCalls"
import CircularProgress from '@mui/material/CircularProgress';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


//
// import { useState } from 'react';


// ///socialMediaAuth
// const LoginFalse = () => {
//     <h1>login please..</h1>

// }



// const LoginTrue = () => {
//     <h1>login success</h1>
// }







function Login() {

    //social media auth
    // const [isLogin, setIsLogin] = useState(false)

    // const { signInWithGoogle, signInWithGithub } = useContext(Context)











    //Sending data
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signInWithGoogle, signInWithGithub, user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginCall({ email: emailRef.current.value, password: passwordRef.current.value }, dispatch)
    }
    console.log(user)



    return (

        //





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
                            <input className="lpInput" type="email" placeholder='Email or username' ref={emailRef} />
                        </div>


                        <div className="loginInputCon">
                            <div className="inputIconCon">
                                <KeyOutlinedIcon className='lpInput-icon' />
                            </div>
                            <input className="lpInput" type="password" placeholder="Password" ref={passwordRef} />
                        </div>


                        <button className='loginBut' onClick={handleSubmit}  >{isFetching ? <CircularProgress className='loginCircularProgress' size="1.4rem" color="inherit" /> : "Log into your account"}</button>

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





                        {/* ======================================= */}
                        {/* {isLogin ? <LoginTrue /> : <LoginFalse />} */}
                        {/* ======================================= */}








                        <span className="socialMediaAuthTxt">Or login with</span>
                        <div className="socialMediaAuthCon">
                            <GoogleIcon className='socialMediaAuthIcon' onClick={signInWithGoogle} />
                            <GitHubIcon className='socialMediaAuthIcon' onClick={signInWithGithub} />
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