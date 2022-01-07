import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../../redux/reducerCars';

const Content = () => {

  const cars = useSelector(state => state.carsReducer.cars)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCars())
  }, [])

  return (
    <div className='content'>
      <h1>Выберите марку</h1>
      { cars.map((item) => {

        const img = `${item.image}`

        return (
          <div>
            <img src={img}/>
          </div>

        )
      })}
    </div>
  );
};

export default Content;