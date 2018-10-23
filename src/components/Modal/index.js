import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
  
class Modal extends React.Component {
  state = {
    value: ''
  }
  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.onAdd(this.state.value)
    this.props.onClose()
  }
  render () {
    const { value } = this.state;
    const { onClose } = this.props;
    return(
      <div className="transparent-container">
        <div className="modal">
          <h4 className="modal-title">Add Item</h4>
          <input value={value} onChange={this.onChange} />
          <div className="buttons-container">
            <button
              className="btn cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`btn add-btn ${value === '' && 'disabled'}`}
              disabled={value === ''}
              onClick={this.onSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal