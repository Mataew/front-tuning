import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

const Accept = () => {

  const cart = useSelector(state => state.cartsReducer.carts)
  console.log(cart)

  const auto = useSelector(state => state.carsReducer.cars.find((item) => item._id === cart.auto))
  const service = useSelector( state => state.serviceReducer.service.find((item) => item._id === cart.service))
  const master = useSelector(state => state.masterReducer.masters.find((item) => item._id === cart.master))
  
  console.log();

  return (
    <div className='accept'>
      <h1>Вы выбрали:</h1>
      <div>
        <div>
         {auto.name}
        </div>
      </div>
    </div>
  );
};

export default Accept;