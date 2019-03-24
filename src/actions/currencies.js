export const currenciesConstant = {
  ADD_CURRENCY: 'ADD_CURRENCY',
  REMOVE_CURRENCY: 'REMOVE_CURRENCY'
}

export const currencies = {
  addCurrency,
  removeCurrency
}

/**
 *
 * @param {string} key of currency
 * @example 'USD' | 'IDR'
 */
function addCurrency(key) {
  return (dispatch) => {
    dispatch({
      type: currenciesConstant.ADD_CURRENCY,
      payload: key
    })
  }
}

/**
 *
 * @param {string} key of currency
 * @example 'USD' | 'IDR'
 */
function removeCurrency(key) {
  return (dispatch, getState) => {
    let newCurrencies = getState().currencies.list.filter(e => e !== key)
    dispatch({
      type: currenciesConstant.REMOVE_CURRENCY,
      payload: newCurrencies
    })
  }
}
