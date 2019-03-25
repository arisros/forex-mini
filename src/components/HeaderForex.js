import React from 'react'
import PropTypes from 'prop-types'

const HeaderForex = (props) => {
  return (
    <header className="header">
      {/* todo: dynamic title? */}
      {/* <p>{props.baseCurrency} -  United State Dollars</p> */}
      <div className="sub-header">
        <h2>{props.baseCurrency}</h2>
        <div>
          <input
            className="form-control"
            onChange={props.changeBaseCurrencyValue}
            value={props.base}
          />
        </div>
      </div>
    </header>
  )
}

HeaderForex.propTypes = {
  base: PropTypes.number,
  baseCurrency: PropTypes.string,
  changeBaseCurrencyValue: PropTypes.func.isRequired
};

export default HeaderForex

