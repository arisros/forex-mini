import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { currencies } from '../actions/currencies'
import { numberWithCommas } from '../utils/formatNumber'

export class ListCurrency extends Component {
  constructor() {
    super()
    this.removeCurrency = (key) => this.props.removeCurrency(key)
  }

  convertFromRates(currency) {
    return numberWithCommas(this.props.rates[currency] * this.props.base)
  }

  render() {
    return (
      <ul className="box-list">
        {this.props.currenciesHasAdded.map(e => (
          <li key={e}>
            <section>
              <div className="box-list-head"><h4>{e}</h4><p>{this.convertFromRates(e)}</p></div>
              <div>1 {this.props.baseCurrency} = {e} {this.props.rates[e]}</div>
            </section>
            <button
              className="btn btn-danger"
              onClick={() => this.removeCurrency(e)}>X</button>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  currenciesHasAdded: state.currencies.list,
  rates: state.rates.list,
  base: state.baseCurrency.baseCurrencyValue,
  baseCurrency: state.baseCurrency.baseCurrency
})

const mapDispatchToProps = (dispatch) => ({
  removeCurrency: (key) => (dispatch(currencies.removeCurrency(key)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCurrency)
