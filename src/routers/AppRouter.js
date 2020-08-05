import React from 'react';
import {Router,Route,Switch,Link ,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history =createHistory();
const AppRouter =()=>(
        <Router history = {history} >
    <div>
       
        <Switch>            
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/addExpense" component={AddExpensePage} />
            <PrivateRoute path="/editExpense/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
       
    </div>        
    </Router>
);
export default AppRouter;