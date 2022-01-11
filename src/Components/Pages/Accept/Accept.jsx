import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

const Accept = () => {

  const cart = useSelector(state => state.cartsReducer.carts)
  console.log(cart)

  const auto = useSelector(state => state.carsReducer.cars)
  console.log(auto)
  const service = useSelector( state => state.serviceReducer.service)
  const master = useSelector(state => state.masterReducer.masters)

  return (
    <div className='accept'>
      <h1>Вы выбрали:</h1>
      <div>
        <div>
          { auto.findOne((item) => {
            if ( item._id === cart.auto){
              return ( console.log('daun'))
            }
          })}
        </div>

      </div>
    </div>
  );
};

export default Accept;