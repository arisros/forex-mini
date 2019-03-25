import React from 'react'
import PropTypes from 'prop-types'

const AddCurrency = (props) => (
  <div className="add-box">
    {!props.addMode ?
      <button
        className="btn btn-warning"
        disabled={props.options.length < 1}
        onClick={props.changeMode}
      >Add Currency</button> :
      <section>
        <select
          className="form-control"
          onChange={props.changeCurrency}>
          <option>Please Select</option>
          {props.options.map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
        <button
          className="btn btn-warning"
          onClick={props.submitCurrency}>Submit</button>
      </section>
    }
  </div>
)

AddCurrency.propTypes = {
  addMode: PropTypes.bool,
  options: PropTypes.array,
  changeMode: PropTypes.func,
  changeCurrency: PropTypes.func,
  submitCurrency: PropTypes.func
};

export default AddCurrency
