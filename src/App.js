import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderForex from './components/HeaderForex'
import AddCurrency from './components/AddCurrency'
import ListCurrency from './components/ListCurrency'
import { rates } from './actions/rates'

import './App.css'

export class App extends Component {

  componentWillMount() {
    this.props.fetchRates()
  }

  render() {
    return (
      <React.Fragment>
        <HeaderForex />
        <ListCurrency />
        <AddCurrency />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (base) => (dispatch(rates.fetchRates()))
})

export default connect(null, mapDispatchToProps)(App)
