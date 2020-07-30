export default (expenses) =>{
    if(expenses.length === 0){
        return 0;
    }else{
        const totalExpense = expenses.reduce((acc,expense) => acc + expense.amount,0);
        return totalExpense;
    }
}


