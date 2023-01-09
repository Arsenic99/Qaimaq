import { createStore, combineReducers } from 'redux';
import { RequestReducer } from './reducers/requestReducer';
import { ServiceReducer } from './reducers/serviceReducer';


let reducers = combineReducers({request: RequestReducer, service: ServiceReducer})

export const store = createStore(reducers);