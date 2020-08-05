import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startUpdateExpense} from '../actions/expenseAction';
const EditExpensePage =(props)=>{ 
    return(
        <div>            
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense)=>{
                props.dispatch(startUpdateExpense(props.expense.id,expense));
                props.history.push('/');                    
            }}/>
        </div>
    );
    }

const mapStateToProps =(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);