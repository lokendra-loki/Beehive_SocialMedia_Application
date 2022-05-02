import React from 'react'
import "./register.scss"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';


function Register() {
    return (
        <div className='registerPage'>
            <div className="rp-Wrapper">
                <div className="rp-Left">
                    <div className="rp-LeftRow1">
                        <img className='rp-logo' src="assets/logo.svg" alt="" />
                    </div>

                    <div className="rp-loginContainer">
                        <img className='rp-logoIcon' src="assets/logo-icon.svg" alt="" />
                        <span className='rp-welcomeTxt'>Welcome</span>
                        <span className='rp-newHere'><span className='newHereSpan'>New here !</span> Create an account</span>
                        <span className="rp-loginDesc">Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits. Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
                        </span>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <PersonOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input class="rp-Input" type="text" placeholder='Username' />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <PersonOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input class="rp-Input" type="text" placeholder='Email' />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <PersonOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input class="rp-Input" type="text" placeholder='Full name' />
                        </div>



                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <KeyOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input class="rp-Input" type="text" placeholder="Password" />
                        </div>

                        <div className="rp-loginInputCon">
                            <div className="rp-inputIconCon">
                                <KeyOutlinedIcon className='rp-Input-icon' />
                            </div>
                            <input class="rp-Input" type="text" placeholder="Confirm password" />

                        </div>


                        <button className='rp-loginBut'>Register</button>
                        <span className='rp-alreadyAcc'>Already have an account ?</span>
                        <button className='rp-loginBut'>Log into your account</button>

                    </div>

                </div>




                <div className="lpRight">right</div>
            </div>
        </div>
    )
}

export default Register