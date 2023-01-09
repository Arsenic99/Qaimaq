import { createStore, combineReducers } from 'redux';
import { RequestReducer } from './reducers/requestReducer';
import { ServiceReducer } from './reducers/serviceReducer';
import { UserReduser } from './reducers/userReducer';


let reducers = combineReducers({request: RequestReducer, service: ServiceReducer, user:UserReduser})

export const store = createStore(reducers);