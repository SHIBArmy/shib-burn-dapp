  
import { createSelector } from 'reselect'
import { get } from 'lodash'


const web3 = state => get(state, 'web3.loaded', false)
export const web3Selector = createSelector(web3, w3 => w3)

const account = state => get(state, 'web3.address', [])
export const accountSelector = createSelector(account, a => a)


const amount = state => get(state, 'tx.amount', [])
export const amountSelector = createSelector(amount, a => a)


const warning = state => get(state, 'warning', false)
export const warningSelector = createSelector(warning, w => w)
const warningData = state => get(state, 'warning.data', false)
export const warningDataSelector = createSelector(warningData, wd => wd)