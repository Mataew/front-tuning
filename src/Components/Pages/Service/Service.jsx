import "./Service.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Service = () => {
  const services = useSelector((state) => state.service);
  const dispatch = useDispatch();
  return (
    <div className="sevice_container">
      <h1>Список наших услуг</h1>
      {/* {services.map((item) => {
        return (
          <div className="srvice_services">
            <div className="service_cart">
              <img src={item.img} alt="lol"></img>
              <div className="service_name"></div>
              {item.name}
              <button>Добавить услугу</button>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Service;
