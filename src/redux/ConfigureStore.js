import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const combineReducer = combineReducers({

})

const store = createStore(combineReducer, composeWithDevTools( applyMiddleware(thunk) ));

export default store;