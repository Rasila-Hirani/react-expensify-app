import {createStore, combineReducers} from 'redux';
import {v4 as uuid4} from 'uuid';
const demoState = {
    expenses:[{
        id:'123',
        description :'rent',
        note:'This is january month rent',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'date', //sortBy date or amount
        startDate:undefined,
        endDate:undefined
    }
}
//ADD_EXPENSE
const addExpense =(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={})=>(
    {
        type:'ADD_EXPENSE',
        expense:{
            id:uuid4(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

//REMOVE_EXPENSE
const removeExpense= ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense =(id,updates)=>({    
    type:'EDIT_EXPENSE',
    id,
    updates
});


//SET_TEXT_FILTER
const setTextFilter=(textFilter='') =>({
    type:'TEXT_FILTER',
    text:textFilter
})
//SORT_BY_AMOUNT
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'  
})
//SORT_BY_DATE
const sortByDate = ()=>({
    type:'SORT_BY_DATE'   
})
//SET_START_DATE
const setStartDate =(date)=>({
    type:'SET_START_DATE',
    startDate:date
})
//SET_END_DATE
const setEndDate =(date)=>({
    type:'SET_END_DATE',
    endDate:date
})
//Expenses Reducer
const expensesReducerDefaultState =[];

const expensesReducer=(state = expensesReducerDefaultState ,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return[
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>id !== action.id )               
        case 'EDIT_EXPENSE':           
            return state.map((expense) =>{                
                  if(expense.id === action.id){                   
                    return{
                        ...expense,
                        ...action.updates                        
                    };
                  }else{
                      return expense;
                  }
              })
                  
        default:
            return state;
    }
}
// Filter Reducer
const filterReducerDefaultState = {
    text : '',
    sortBy :'date',
    startDate :undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, filter)=>{
    switch(filter.type){
    case 'TEXT_FILTER':
        return {
            ...state,
            text:filter.text
        };
    case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy:'amount'
            };
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
          };
    case 'SET_START_DATE':
        return {
            ...state,
            startDate:filter.startDate
        };
    case 'SET_END_DATE':
        return {
            ...state,
            endDate:filter.endDate
        };
    default:
            return state;
    }
}

//Get visible expenses
const getVisibleExpenses =(expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

        
    })
};
//Combine Reducers
const store =createStore(
    combineReducers(
        {
            expenses:expensesReducer,
            filters:filterReducer
        }
    )
);
store.subscribe(()=>{
    const state =store.getState();
    const visibelExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibelExpenses);
})
const expenseOne = store.dispatch(addExpense({description:'rent',amount:1000,createdAt:100}));
const expenseTwo = store.dispatch(addExpense({description:'shopping',amount:700,createdAt:75}));
const expenseThree = store.dispatch(addExpense({description:'coffee',amount:800,createdAt:1000}));

// store.dispatch(removeExpense({id:expenseTwo.expense.id}));
 const updateExpenseOne = store.dispatch(editExpense(expenseOne.expense.id,{description:'House Rent',amount:500}));

// store.dispatch(setTextFilter('ffe'));
store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(100));
//console.log(updateExpenseOne);