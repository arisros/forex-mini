export const currenciesConstant = {
  ADD_CURRENCY: 'ADD_CURRENCY',
  REMOVE_CURRENCY: 'REMOVE_CURRENCY',
  ADD_OPTIONS: 'ADD_OPTIONS',
  REMOVE_OPTIONS: ''
}

export const currencies = {
  addCurrency,
  removeCurrency
}

function addCurrency(key) {
  return (dispatch, getState) => {
    dispatch({
      type: currenciesConstant.ADD_CURRENCY,
      payload: key
    })

    dispatch({
      type: currenciesConstant.REMOVE_OPTIONS,
      payload: key
    })
  }
}

function removeCurrency(key) {
  return (dispatch, getState) => {
    let newCurrencies = getState().currencies.list.filter(e => e !== key)
    dispatch({
      type: currenciesConstant.REMOVE_CURRENCY,
      payload: newCurrencies
    })

    dispatch({
      type: currenciesConstant.ADD_OPTIONS,
      payload: key
    })
  }
}
