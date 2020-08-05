import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Combine Reducers
export default () =>{
    const store =createStore(
        combineReducers({
                expenses:expensesReducer,
                filters:filterReducer,
                auth:authReducer
            }),
       composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

