import { rates } from './rates'

export const baseCurrencyContants = {
  SET_BASE_CURRENCY: 'SET_BASE_CURRENCY',
  SET_BASE_CURRENCY_VALUE: 'SET_BASE_CURRENCY_VALUE'
}

export const baseCurrency = {
  setBaseCurrency,
  setBaseCurrencyValue
}

/**
 *
 * @param {string} params
 */
function setBaseCurrency(params) {
  return (dispatch) => {
    dispatch({
      type: baseCurrencyContants.SET_BASE_CURRENCY,
      payload: params
    })

    dispatch(rates.fetchRates(params))
  }
}

/**
 *
 * @param {number} value
 */
function setBaseCurrencyValue(value) {
  return (dispatch) => {
    dispatch({
      type: baseCurrencyContants.SET_BASE_CURRENCY_VALUE,
      payload: value
    })
  }
}
