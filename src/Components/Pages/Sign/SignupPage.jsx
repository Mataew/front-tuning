import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/reducerSign";
import "./SignUp.css";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [blurLogin, setBlurLogin] = useState(true);
  const [blurPassword, setBlurPassword] = useState(true);
  const [blurFirstName, setBlurFirstName] = useState(true);
  const [blurLastName, setBlurLastName] = useState(true);
  const [blurNumber, setBlurNumber] = useState(true);
  const [complete, setComplete] = useState("");
  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);
  const token = useSelector((state) => state.application.token);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    setLogin("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setNumber("");
    setComplete(true);
    dispatch(createUser(login, password, firstName, lastName, number));
  };

  const handleBlurLogin = () => {
    login === "" ? setBlurLogin(false) : setBlurLogin(true);
  };

  const handleBlurPassword = () => {
    password === "" ? setBlurPassword(false) : setBlurPassword(true);
  };

  const handleBlurFirstName = () => {
    firstName === "" ? setBlurFirstName(false) : setBlurFirstName(true);
  };

  const handleBlurLastName = () => {
    lastName === "" ? setBlurLastName(false) : setBlurLastName(true);
  };

  const handleBlurNumber = () => [
    number === "" ? setBlurNumber(false) : setBlurNumber(true),
  ];

  const good = complete === true ? "Вы успешно зарегистрировались" : "";

  return (
    <div className="SignUpMain">
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
        <div className="mainINP">
          <div className="SignUpBlock">
            <input
              onBlur={handleBlurFirstName}
              className="firstNameINP"
              type="firstName"
              placeholder="Введите Имя"
              value={firstName}
              onChange={(e) => handleChangeName(e)}
            />
            {!blurFirstName ? (
              <div className="empty">
                <span>Поле ввода не должно<br /> быть пустым</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="SignUpBlock">
            <input
              onBlur={handleBlurLastName}
              className="lastNameINP"
              type="lastName"
              placeholder="Введите Фамилию"
              value={lastName}
              onChange={(e) => handleChangeLastName(e)}
            />
            {!blurLastName ? (
              <div className="empty">
                <span>Поле ввода не должно<br /> быть пустым</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="SignUpBlock">
            <input
              onBlur={handleBlurNumber}
              className="numberINP"
              type="number"
              placeholder="Введите номер телефона"
              value={number}
              onChange={(e) => handleChangeNumber(e)}
            />
            {!blurNumber ? (
              <div className="empty">
                <span>Поле ввода не должно<br /> быть пустым</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          className="RegisterBTN"
          onClick={handleSubmit}
          disabled={!login || !password || !firstName || signingUp}
        >
          Зарегистрироваться
        </button>
        <div className={!token ? "NoEmpty" : "BlockError"}>
          {token ? good : error}
        </div>
        <div className="BackLinkBlock">
          <Link className="LinkMain" to="/signIn">
            <button className="Back">⬅Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
