import React from 'react'
import PropTypes from 'prop-types'
import { numberWithCommas } from '../utils/formatNumber'

const ListCurrency = (props) => {
  const convertFromRates = (key) => {
    try {
      const convert = props.rates[key] * props.base
      if (!isNaN(convert)) return numberWithCommas(convert)
      throw new Error('Cant find rates')
    } catch (error) {
      return `Can't find rates ${key}`
    }
  }
  return (
    <ul className="box-list">
      {props.list.map(e => (
        <li key={e}>
          <section>
            <div className="box-list-head">
              <h4>{e}</h4>
              <p>{convertFromRates(e)}</p>
            </div>
            <div>
              1 {props.baseCurrency} = {e}
              <b>{!props.rates[e] ? `can't find` : props.rates[e]}</b>
            </div>
          </section>
          <button
            className="btn btn-danger"
            onClick={() => props.removeCurrency(e)}>X</button>
        </li>
      ))}
    </ul>
  )
}

ListCurrency.propTypes = {
  list: PropTypes.array,
  rates: PropTypes.object.isRequired,
  base: PropTypes.number.isRequired,
  baseCurrency: PropTypes.string,
  removeCurrency: PropTypes.func.isRequired
}

export default ListCurrency
