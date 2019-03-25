import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderForex from './components/HeaderForex'
import AddCurrency from './components/AddCurrency'
import ListCurrency from './components/ListCurrency'
import { rates } from './actions/rates'
import { listCurrency } from './constants/list'
import { currencies } from './actions/currencies'

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

    this.submitCurrency = () => {
      if (this.state.currency) {
        this.props.addCurrency(this.state.currency)
        this.setState({ addMode: false })
        this.filterOptions(this.state.currency)

        this.setState({ currency: null })
      }
    }

    this.filterOptions = key => {
      /* remove options if has added to the list */
      let filterFromRedux = listCurrency.filter(function (e) {
        return this.indexOf(e) < 0
      }, this.props.currenciesHasAdded)

      /* filter with {key} */
      let currencyOptions = filterFromRedux.filter(e => e !== key)
      this.setState({ currencyOptions })
    }

  }



  componentWillMount() {
    this.props.fetchRates()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currenciesHasAdded !== this.props.currenciesHasAdded) {
      this.filterOptions(this.state.currency)
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderForex />
        <ListCurrency />
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
  currenciesHasAdded: state.currencies.list
})

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (base) => (dispatch(rates.fetchRates(base))),
  addCurrency: key => (dispatch(currencies.addCurrency(key)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
