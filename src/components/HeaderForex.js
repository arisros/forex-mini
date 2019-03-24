import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { baseCurrency } from '../actions/baseCurrency'

export class HeaderForex extends Component {

  constructor() {
    super()
    this.changeBaseCurrencyValue = e => {
      if (parseInt(e.target.value) > -1) {
        this.props.setBaseCurrencyValue(parseInt(e.target.value))
      }
      return false
    };
  }

  componentWillMount() {
    this.props.setBaseCurrency('USD')
    this.props.setBaseCurrencyValue(10)
  }

  render() {
    return (
      <header className="header">
        <p>{this.props.baseCurrency} - United State Dollars</p>
        <div className="sub-header">
          <div>{this.props.baseCurrency}</div>
          <div>
            <input
              className="form-control"
              onChange={this.changeBaseCurrencyValue}
              value={this.props.baseCurrencyValue}
            />
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  baseCurrency: state.baseCurrency.baseCurrency,
  baseCurrencyValue: state.baseCurrency.baseCurrencyValue
})

const mapDispatchToProps = (dispatch) => ({
  setBaseCurrency: (currency) => dispatch(baseCurrency.setBaseCurrency(currency)),
  setBaseCurrencyValue: (value) => dispatch(baseCurrency.setBaseCurrencyValue(value))
})

HeaderForex.propTypes = {
  baseCurrency: PropTypes.string,
  baseCurrencyValue: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderForex)
