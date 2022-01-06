import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const combineReducer = combineReducers({

})

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;