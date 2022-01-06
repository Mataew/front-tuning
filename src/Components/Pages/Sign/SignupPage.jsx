import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/reducerSign";

const SignupPage = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const signingUp = useSelector(state => state.application.signingUp)
    const error = useSelector(state => state.application.error)

    const handleChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(createUser(login, password))
    }


  return (
    <div>
        {error}
      <div>
        <input
          type="text"
          placeholder="type login"
          value={login}
          onChange={(e) => handleChangeLogin(e)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="type password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
        />
      </div>
      <button onClick={handleSubmit} disabled={signingUp}>Зарегистрироваться</button>
    </div>
  );
};

export default SignupPage;
