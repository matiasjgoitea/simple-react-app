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
  onAdd = () => {
    this.props.addItem(this.state.value)
  }
  render () {
    const { value } = this.state;
    const { onClose } = this.props;
    return(
      <div className="transparent-container">
        <div className="modal">
        <form>
          <h4 className="modal-title">Add Item</h4>
          <input value={value} onChange={this.onChange} />
        </form>
          <div className="buttons-container">
            <button
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`add-button ${value === '' && 'disabled'}`}
              onClick={this.onAdd}
              disabled={value === ''}
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
  addItem: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal