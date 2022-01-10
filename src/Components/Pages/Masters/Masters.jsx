import React from "react";
import "./master.css";
import { useDispatch, useSelector } from "react-redux";

const Masters = () => {
  const masters = useSelector((state) => state.masters);

  console.log(masters);

  return (
    <div className="master_main">
      <h1>Мастера меча онлайн</h1>
      <h2>Выберите своего мастера</h2>
      <hr />
      <div className="master_flex_blocks"></div>
      {masters.map((item, index) => {
        return (
          <div>
            {item.image}
            {item.name}
          </div>
        )
      })}
    </div>
  );
};

export default Masters;
