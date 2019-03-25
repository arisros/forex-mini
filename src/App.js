import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeaderForex from './components/HeaderForex'
import AddCurrency from './components/AddCurrency'
import ListCurrency from './components/ListCurrency'
import { rates } from './actions/rates'
import { listCurrency } from './constants/list'
import { currencies } from './actions/currencies'
import { baseCurrency } from './actions/baseCurrency'

import './App.css'

export class App extends Component {

  constructor() {
    super()

    this.state = {
      addMode: false,
      currency: '',
      currencyOptions: listCurrency
    }

    this.changeMode = () => this.setState({ addMode: true })
    this.changeCurrency = e => this.setState({ currency: e.target.value })
    this.removeCurrency = (key) => this.props.removeCurrency(key)

    this.submitCurrency = this.submitCurrency.bind(this)
    this.filterOptions = this.filterOptions.bind(this)
    this.changeBaseCurrencyValue = this.changeBaseCurrencyValue.bind(this)

  }
  submitCurrency() {
    if (this.state.currency) {
      this.props.addCurrency(this.state.currency)
      this.setState({ addMode: false })
      this.filterOptions(this.state.currency)

      this.setState({ currency: null })
    }
  }

  filterOptions(key) {
    /* remove options if has added to the list */
    let filterFromRedux = listCurrency.filter(function (e) {
      return this.indexOf(e) < 0
    }, this.props.currenciesHasAdded)

    /* filter with {key} */
    let currencyOptions = filterFromRedux.filter(e => e !== key)
    this.setState({ currencyOptions })
  }

  changeBaseCurrencyValue(e) {
    /* check if enter number */
    if (parseInt(e.target.value) > -1) {
      this.props.setBaseCurrencyValue(parseInt(e.target.value))
    }
    return false
  }

  componentWillMount() {
    this.props.fetchRates()
    this.props.setBaseCurrency('USD')
    this.props.setBaseCurrencyValue(10)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currenciesHasAdded !== this.props.currenciesHasAdded) {
      this.filterOptions(this.state.currency)
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderForex
          base={this.props.base}
          baseCurrency={this.props.baseCurrency}
          changeBaseCurrencyValue={this.changeBaseCurrencyValue} />
        <ListCurrency
          base={this.props.base}
          baseCurrency={this.props.baseCurrency}
          list={this.props.currenciesHasAdded}
          rates={this.props.rates}
          removeCurrency={this.removeCurrency} />
        <AddCurrency
          changeMode={this.changeMode}
          changeCurrency={this.changeCurrency}
          submitCurrency={this.submitCurrency}
          options={this.state.currencyOptions}
          addMode={this.state.addMode} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  base: state.baseCurrency.baseCurrencyValue,
  baseCurrency: state.baseCurrency.baseCurrency,
  currenciesHasAdded: state.currencies.list,
  rates: state.rates.list,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (base) => (dispatch(rates.fetchRates(base))),
  addCurrency: key => (dispatch(currencies.addCurrency(key))),
  removeCurrency: key => (dispatch(currencies.removeCurrency(key))),
  setBaseCurrency: currency =>
    dispatch(baseCurrency.setBaseCurrency(currency)),
  setBaseCurrencyValue: value =>
    dispatch(baseCurrency.setBaseCurrencyValue(value))
})

App.propTypes = {
  base: PropTypes.number,
  baseCurrency: PropTypes.string,
  currenciesHasAdded: PropTypes.array,
  rates: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
