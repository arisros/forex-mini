import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeaderForex from './components/HeaderForex'
import AddCurrency from './components/AddCurrency'
import ListCurrency from './components/ListCurrency'
import { rates } from './actions/rates'

import './App.css'

export class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (base) => (dispatch(rates.fetchRates()))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
