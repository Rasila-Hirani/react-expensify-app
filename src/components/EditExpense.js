import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startUpdateExpense,startRemoveExpense} from '../actions/expenseAction';
import DeleteModal from './DeleteModal';

export class EditExpensePage extends React.Component {
    state ={
      showModal:undefined
    }; 
    handleOpenModal = () => {
      this.setState({ showModal: true });
    }
    handleCloseModal =() =>{
      this.setState({ showModal: undefined });
    }
    onSubmit = (expense) => {
        this.props.startUpdateExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
      };
    render(){
        return(
            <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
              </div>
            </div>
            <div className="content-container">
              <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}
              />
              <button className="button" onClick={this.handleOpenModal}>Remove Expense</button>
            <DeleteModal 
              isOpen={this.state.showModal} 
              isClose={this.handleCloseModal}              
              onRemove={this.onRemove}/>
   
            </div>
          </div>
        );
    }

};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  });
  
  const mapDispatchToProps = (dispatch, props) => ({
    startUpdateExpense: (id, expense) => dispatch(startUpdateExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
  



