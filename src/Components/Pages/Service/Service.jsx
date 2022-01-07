import "./Service.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadService } from "../../../redux/reducerService";
import pathLogo from "../../../assets/services/auto-shtori.jpg";
import { Link, NavLink } from "react-router-dom";

const Service = () => {
  const services = useSelector((state) => state.serviceReducer.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);
  return (
    <div className="sevice_container">
      <h1>Список наших услуг</h1>
      <div className="srvice_services">
        <Link to='/' className="sevice_btn">Хочу тюнинг</Link>
        {services.map((item) => {

          return (
            <div className="service_cart">
              <div className="service_image">
                <img src={item.img} />
              </div>
              <div className="service_name">{item.name}</div>
            </div>
          );

        })}
      </div>
    </div>
  );
};

export default Service;
