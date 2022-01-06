import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";
import { Link } from "react-router-dom";

const SigninPage = () => {
  return (
    <div>

        <Link to="/signUp">Регистрация</Link>
    </div>
  );
};

export default SigninPage;
