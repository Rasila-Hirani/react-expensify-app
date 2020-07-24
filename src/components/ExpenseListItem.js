import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenseAction';
import {connect} from 'react-redux';

export const ExpenseListItem =({dispatch, id, description, amount, createdAt})=>(   
    <div>       
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
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