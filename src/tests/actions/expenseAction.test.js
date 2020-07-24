import {addExpense, editExpense, removeExpense} from '../../actions/expenseAction';


test('should remove expense object' ,() =>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('should edit expense object' , () =>{
    const action = editExpense('123abc',{note:'New note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'New note value'
        }
    })
});

test('shoould add expense object with provided values' ,()=>{
    const expenseData = {
        description :'Rent',
        amount:10500,
        createdAt:1500,
        note:'This test case add method'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    });
});

test('shoould add expense object with default values' ,()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description :'',
            amount:0,
            createdAt:0,
            note:''
        }

    })
})