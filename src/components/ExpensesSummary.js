import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from'numeral';
require('numeral/locales/en-gb');
numeral.locale('en-gb');
import selectExpenses from '../selectors/expenseSelector';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary=({expenseCount, ExpenseTotal, hiddenExpneseCount})=>{
    const expenseWord =expenseCount === 1 ? 'expense' : 'expenses' ;
    const expenseTotalFormat = numeral(ExpenseTotal/100).format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{expenseTotalFormat}</span></h1>
              {hiddenExpneseCount >0 ?<p  className="page-header__title">There is <span>{hiddenExpneseCount}</span> hidden expense.</p>:''}
              <div className="page-header__actions">
                    <Link className="button" to="/addExpense">Add Expense</Link>
              </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const visibleExpenses =selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        hiddenExpneseCount:(state.expenses.length) - visibleExpenses.length,
        ExpenseTotal: selectExpensesTotal(visibleExpenses)

    };
};

export default connect(mapStateToProps)(ExpensesSummary);