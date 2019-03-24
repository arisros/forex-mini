import { rateService } from '../services/rates'

export const ratesConstant = {
  FETCH_RATES: 'FETCH_RATES',
  RATES_SUCCESS: 'RATES_LOADED',
  RATES_FAILURE: 'RATES_FAIL_LOAD'
}

export const rates = {
  fetchRates
}

function fetchRates(base) {
  return (dispatch) => {
    dispatch(request())
    rateService(base)
      .then(res => {
        dispatch(success(res))
      })
      .catch(err => {
        dispatch(failure(err))
      })

    function request() {
      return {
        type: ratesConstant.FETCH_RATES
      }
    }

    function success(payload) {
      return {
        type: ratesConstant.RATES_SUCCESS,
        payload: payload
      }
    }

    function failure() {
      return {
        type: ratesConstant.RATES_FAILURE
      }
    }
  }
}
