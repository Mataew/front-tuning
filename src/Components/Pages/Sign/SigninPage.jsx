import React from "react";
import SignupPage from "./SignupPage";
import { Link } from "react-router-dom";
import "./Signin.css"

const SigninPage = () => {
  return (
    <div className="SigninBlock">
        <Link to="/signUp">Регистрация</Link>
    </div>
  );
};

export default SigninPage;
