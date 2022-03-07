import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
//import {calendarReducer} from "./calendari";

import thunk from 'redux-thunk';
//import thunk from 'redux-thunk';
//import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  //calendar:calendarReducer,
  
})

const loggerMiddeleware = (store) => (dispatch) => (action) =>{
    //console.log('loger  ', store, dispatch, action )
    return dispatch(action)
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddeleware,thunk)),
   
);
