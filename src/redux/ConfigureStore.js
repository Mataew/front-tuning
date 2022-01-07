import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './reducerSign';
import { serviceReducer } from './reducerService';
import { profilfeReducer } from './reducerProfile';
import { carsReducer } from './reducerCars';



const combineReducer = combineReducers({ application, serviceReducer, profilfeReducer, carsReducer })

const store = createStore(combineReducer, composeWithDevTools( applyMiddleware(thunk) ));

export default store;