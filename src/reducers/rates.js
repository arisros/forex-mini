import { ratesConstant } from '../actions/rates'

const initialState = {
  list: [],
  error: false,
  loading: false
}

export const rates = (state = initialState, action) => {
  switch (action.type) {
    case ratesConstant.FETCH_RATES:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case ratesConstant.RATES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.rates
      }

    case ratesConstant.RATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state
  }
}
