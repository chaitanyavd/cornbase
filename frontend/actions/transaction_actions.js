

import * as transactionApiUtil from '../util/transaction_api_util'; 


export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS"; 
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION"







export const createTransaction = (transaction) => dispatch => (
    transactionApiUtil.createTransaction(transaction).then(transaction => dispatch({ type: RECEIVE_TRANSACTION, transaction }))
)


export const fetchTransactions = () => dispatch => (
    transactionApiUtil.fetchTransactions().then(transactions => dispatch({type: RECEIVE_TRANSACTIONS. transactions}))
)

