import { baseCurrencyContants } from '../actions/baseCurrency'

const initialState = {
  baseCurrency: '',
  baseCurrencyValue: 0
}

export const baseCurrency = (state = initialState, action) => {

  switch (action.type) {
    case baseCurrencyContants.SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload
      }
    case baseCurrencyContants.SET_BASE_CURRENCY_VALUE:
      return {
        ...state,
        baseCurrencyValue: action.payload
      }

    default:
      return state
  }

}
