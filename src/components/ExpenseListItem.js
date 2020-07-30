import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenseAction';
import {connect} from 'react-redux';
import moment from 'moment';
import numeral from'numeral';
require('numeral/locales/en-gb');
numeral.locale('en-gb');
export const ExpenseListItem =({dispatch, id, description, amount, createdAt})=>(   
    <div>       
        <h3>{description}</h3>     
        <p>{numeral(amount/100).format('$0,0.00')}-
        {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <Link to={`/editExpense/${id}`}>Edit</Link>
        <button onClick={()=>{
           dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);
const mapStateToProps =(state) =>{
    return{
        expenses:state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseListItem);