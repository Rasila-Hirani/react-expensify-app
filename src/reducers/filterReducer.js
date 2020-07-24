import moment from 'moment';
// Filter Reducer
const filterReducerDefaultState = {
    text : '',
    sortBy :'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
export default (state = filterReducerDefaultState, filter)=>{
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