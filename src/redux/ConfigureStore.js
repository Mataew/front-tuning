import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/reducerSign';
import { serviceReducer } from './features/reducerService';
import { profilfeReducer } from './features/reducerProfile';
import { carsReducer } from './features/reducerCars';



const combineReducer = combineReducers({ application, serviceReducer, profilfeReducer, carsReducer })

const store = createStore(combineReducer, composeWithDevTools( applyMiddleware(thunk) ));

export default store;