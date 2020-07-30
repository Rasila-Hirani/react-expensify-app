import React from 'react';
import {connect} from 'react-redux';
import numeral from'numeral';
require('numeral/locales/en-gb');
numeral.locale('en-gb');
import selectExpenses from '../selectors/expenseSelector';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary=({expenseCount, ExpenseTotal})=>{
    const expenseWord =expenseCount === 1 ? 'expense' : 'expenses' ;
    const expenseTotalFormat = numeral(ExpenseTotal/100).format('$0,0.00');
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {expenseTotalFormat}</h1>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const visibleExpenses =selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        ExpenseTotal: selectExpensesTotal(visibleExpenses)

    };
};

export default connect(mapStateToProps)(ExpensesSummary);