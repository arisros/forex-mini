import { combineReducers } from 'redux';

import { baseCurrency } from './baseCurrency'
import { currencies } from './currencies'
import { rates } from './rates'

export default combineReducers({
  baseCurrency,
  currencies,
  rates
});
