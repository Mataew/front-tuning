import React from "react";
import SignupPage from "./SignupPage";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../redux/reducerSign";
import "./Signin.css";

const SigninPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [complete, setComplete] = useState("");
  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLogin("");
    setPassword("");
    setComplete(true);
    dispatch(auth(login, password));
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  };

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  const good = complete === true ? "Вы успешно авторизовались" : "";

  return (
    <div className="SignUpMain">
      <div className="SignWindow">
        <div className="SignUpBlock">
          {/* <div className="BlockError">{error}</div> */}
          <input
            className="loginINP"
            onBlur={handleBlurLogin}
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => handleChangeLogin(e)}
          />
          {!blurLogin ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="SignUpBlock">
          <input
            onBlur={handleBlurPassword}
            className="passwordINP"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
          {!blurPassword ? (
            <div className="empty">
              <span>Поле ввода не должно быть пустым</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          className="RegisterBTN"
          onClick={handleSubmit}
          disabled={!login || !password || signingIn}
        ><Link to="/">Войти</Link>
        </button>
        <div className={error === null ? "NoEmpty" : "BlockError"}>
          {error === null ? good : error}
        </div>
        <div className="SigninBlock">
          <span className="textOne">Не зарегистрированы ?</span>
          <Link className="Link" to="/signUp">
            Зарегистрироваться
          </Link>
        </div>
        <div className="MainLinkBlock">
          <Link className="LinkMain" to="/">
            <button className="getMain">На главную меню</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
