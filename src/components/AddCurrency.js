import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currencies } from '../actions/currencies'

const listCurrency = [
  'USD',
  'CAD',
  'IDR',
  'GBP',
  'CHF',
  'SGD',
  'INR',
  'MYR',
  'JPY',
  'KRW',
]

export class AddCurrency extends Component {
  constructor() {
    super()
    this.state = { addMode: false, currency: '', currencyOptions: listCurrency }
    this.changeMode = () => { this.setState({ addMode: true }) }
    this.changeCurrency = (e) => { this.setState({ currency: e.target.value }) }

    this.submitCurrency = () => {
      if (this.state.currency) {
        this.props.addCurrency(this.state.currency)
        this.setState({ addMode: false })
        this.filterCurrencies(this.state.currency)

        this.setState({ currency: null })
      }
    }

    this.filterCurrencies = (key) => {
      let filterFromRedux = listCurrency.filter(function (e) { return this.indexOf(e) < 0 }, this.props.currenciesHasAdded)
      let currencyOptions = filterFromRedux.filter(e => e !== key)
      this.setState({ currencyOptions })
    }
  }

  render() {
    return (
      <div>
        {!this.state.addMode ?
          <button
            onClick={this.changeMode}
          >Add Currency</button> :
          <div>
            <select onChange={this.changeCurrency}>
              <option>Please Select</option>
              {this.state.currencyOptions.map(e => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <button onClick={this.submitCurrency}>Submit</button>
          </div>

        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currenciesHasAdded: state.currencies.list
})


const mapDispatchToProps = (dispatch) => ({
  addCurrency: (key) => (dispatch(currencies.addCurrency(key))),
  removeCurrency: (key) => (dispatch(currencies.removeCurrency(key)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency)
