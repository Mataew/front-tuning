import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/reducerSign";
import "./SignUp.css";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [complete, setComplete] = useState("")
  const signingUp = useSelector((state) => state.application.signingUp);
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
    setComplete(true)
    dispatch(createUser(login, password));
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  };

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  return (
    <div className="SignUpMain">
      {error}
      <div className="SignWindow">
        <div className="SignUpBlock">
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
            placeholder="введите пароль"
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
          disabled={!login || !password || signingUp}
        >
          Зарегистрироваться
        </button>
        <div className="NoEmpty">
          {complete === true ? "Вы успешно авторизовались" : ""}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
