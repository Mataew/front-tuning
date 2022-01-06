import "./Service.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadService } from "../../../redux/reducerService";
import pathLogo from '../../../assets/logos/1kamaz.png'

const Service = () => {
  const services = useSelector((state) => state.serviceReducer.service);
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(loadService())
  }, [dispatch])
  return (
    <div className="sevice_container">
        <h1>Список наших услуг</h1>
        <div className="srvice_services">
      {services.map((item) => {
        return (
            <div className="service_cart">
              {/* <img src={item.img}/> */}
              <div className="service_name">
              {item.name}
              </div>
              <button>Добавить услугу</button>
            </div>
        );
      })}
    </div>
    </div>
  );
};

export default Service;
