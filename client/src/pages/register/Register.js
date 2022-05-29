import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import React, { useContext } from "react";
import { registerSchema } from "./formValidationSchema";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
const { useFormik } = require("formik");

function Register() {
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("submitted");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
      actions.resetForm();
      console.log(res.data);
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <div className="registerPage">
      <div className="rp-Wrapper">
        <div className="rp-Left">
          <div className="rp-LeftRow1">
            <img className="rp-logo" src="assets/logo.svg" alt="" />
          </div>

          <form className="rp-loginContainer" onSubmit={handleSubmit}>
            <img className="rp-logoIcon" src="assets/logo-icon.svg" alt="" />
            <span className="rp-welcomeTxt">Welcome</span>
            <span className="rp-newHere">
              <span className="newHereSpan">New here !</span> Create an account
            </span>
            <span className="rp-loginDesc">
              Lorffem ipsumfffdd dolors sit amet constetur aipisicing elits.
              Consatur, svvxi plavvvvt lab rerum quae fugiat nihil.
            </span>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <PersonOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={values.username}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur} //blur when leave the input
                  className={
                    errors.username && touched.username
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>

              {errors.username && touched.username && (
                <p className="error">{errors.username}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <MailOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <KeyOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div className="rp-loginInputCon">
              <div className="iconAndInputCon">
                <div className="rp-inputIconCon">
                  <KeyOutlinedIcon className="rp-Input-icon" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={values.confirmPassword}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : "registerInputs"
                  }
                />
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <button className="rp-loginBut" type="submit">
              Register
            </button>

            <span className="rp-alreadyAcc">Already have an account ?</span>

            <Link to="/login" className="link">
              <button className="rp-loginBut">Log into your account</button>
            </Link>

            {/* <button
              className="registerSubmitBut"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button> */}
          </form>
        </div>
        <div className="lpRight">right</div>
      </div>
    </div>
  );
}

export default Register;
