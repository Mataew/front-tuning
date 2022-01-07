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
    <div className='content-cars'>
      <h1>Выберите марку</h1>
      <div></div>
    </div>
  );
};

export default Content;