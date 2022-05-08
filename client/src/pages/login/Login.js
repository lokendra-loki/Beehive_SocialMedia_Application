import React, { useContext, useRef } from 'react'
import "./login.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Context } from '../../context/Context';
import { loginCall } from "../../apiCalls"
import CircularProgress from '@mui/material/CircularProgress';


function Login() {

    //Sending data
    const emailRef = useRef()
    const passwordRef = useRef()
    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginCall({ email: emailRef.current.value, password: passwordRef.current.value }, dispatch)
       
    }
    console.log(user)



    return (
        <div className='loginPage'>
            <div className="lpWrapper">
                <div className="lpLeft">
                    <div className="lpLeftRow1">
                        <img className='logo' src="assets/logo.svg" alt="" />
                    </div>

                    <form className="loginContainer" onSubmit={handleSubmit}>
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


                        <button className='loginBut' type='submit'   >{isFetching ? <CircularProgress className='loginCircularProgress' size="1.4rem" color="inherit" /> : "Log into your account"}</button>
                        <div className="checkboxAndForgetCon">
                            <div className="checkboxCon">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
                                <label htmlFor="vehicle1">Remember</label>
                            </div>
                            <span className='forgotPass'>Forgot Password ?</span>
                        </div>

                        <button className='loginBut'>Create an account</button>
                    </form>
                </div>
                <div className="lpRight">right</div>
            </div>
        </div>
    )
}

export default Login