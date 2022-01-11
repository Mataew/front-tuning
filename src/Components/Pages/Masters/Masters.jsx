import React, { useEffect } from "react";
import "./master.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMaster, masterReducer } from '../../../redux/features/reducerMasters';
import { Link } from 'react-router-dom';

const Masters = () => {
  const masters = useSelector((state) => state.masterReducer.masters);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadMaster())
  }, [])

  return (
    <div className="master_main">
      <h1>Мастера меча онлайн</h1>
      <h2>Выберите своего мастера</h2>
      <hr />
      <div className="master_flex_blocks">
        {masters.map((item, index) => {
          return (
            <div>
              {item.image}
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Masters;
