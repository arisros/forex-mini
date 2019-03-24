import { currenciesConstant } from '../actions/currencies'

const initialState = {
  list: []
}

export const currencies = (state = initialState, action) => {

  switch (action.type) {
    case currenciesConstant.ADD_CURRENCY:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    case currenciesConstant.REMOVE_CURRENCY:
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }

}
