import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './reducerSign';


const combineReducer = combineReducers({ application })

const store = createStore(combineReducer, composeWithDevTools( applyMiddleware(thunk) ));

export default store;