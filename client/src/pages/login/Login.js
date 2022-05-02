import React from 'react'
import "./login.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';


function Login() {
    return (
        <div className='loginPage'>
            <div className="lpWrapper">
                <div className="lpLeft">
                    <div className="lpLeftRow1">
                        <img className='logo' src="assets/logo.svg" alt="" />
                    </div>

                    <div className="loginContainer">
                        <img className='logoIcon' src="assets/logo-icon.svg" alt="" />
                        <span className='welcomeTxt'>Welcome</span>
                        <span className="loginDesc">Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits. Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
                        </span>

                        <div className="loginInputCon">
                            <div className="inputIconCon">
                                <PersonOutlinedIcon className='lpInput-icon'/>
                            </div>
                            <input class="lpInput" type="text" placeholder='Email or username' />
                        </div>

                        <div className="loginInputCon">
                            <div className="inputIconCon">
                                <KeyOutlinedIcon className='lpInput-icon' />
                            </div>
                            <input class="lpInput" type="text" placeholder="Password" />

                        </div>


                        <button className='loginBut'>Log into your account</button>
                        <div className="checkboxAndForgetCon">
                            <div className="checkboxCon">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="" />
                                <label for="vehicle1">Remember</label>
                            </div>
                            <span className='forgotPass'>Forgot Password ?</span>

                        </div>


                        <button className='loginBut'>Create an account</button>




                    </div>

                </div>




                <div className="lpRight">right</div>
            </div>
        </div>
    )
}

export default Login