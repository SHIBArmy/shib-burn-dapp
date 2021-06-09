import { combineReducers } from 'redux';


function web3(state = {}, action) {
    switch(action.type){
        case 'LOAD_WEB3':
        return { ...state, loaded: true, web3: action.web3}
        case 'LOAD_ACCOUNT':
        return { ...state, address: action.address}
        default:
            return state
    }

}

function tx(state = {}, action) {
    switch(action.type){
        case 'AMOUNT_CHANGED':
        return { ...state, amount: action.amount}
        default:
            return state
    }

}




const rootReducer = combineReducers({
    web3,
    tx
  })
  
  
  export default rootReducer