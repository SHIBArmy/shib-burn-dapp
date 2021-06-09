export function loadWeb3(web3) {
    return{
        type: 'LOAD_WEB3',
        web3
    }
}

export function loadAccount(address) {
    return{
        type: 'LOAD_ACCOUNT',
        address
    }
}


export function amountChanged(amount) {
    return{
        type: 'AMOUNT_CHANGED',
        amount
    }
}