import React from 'react'
import Modal from '../Modal'
import './index.css'

export default class MarketList extends React.Component {
  state = {
    items: JSON.parse(localStorage.getItem('todoList')) || [],
    isModalOpen: false
  }

  saveItems = items => {
    localStorage.setItem('todoList', JSON.stringify(items))
    this.setState({ items })
  }

  addItem = str => {
    const { items } = this.state
    items.push(str)
    this.saveItems(items)
  }

  removeItem = ({ target }) => {
    const { items } = this.state
    items.splice(target.name, 1)
    this.saveItems(items)
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  render () {
    const { items, isModalOpen } = this.state
    return (
      <div>
        {
          isModalOpen && <Modal onClose={this.toggleModal} onAdd={this.addItem} />
        }
        <div>
        <p className="items-count">{items.length} Items</p>
        <ul className="items-container">
          {
            items.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <p className="item-name">{item}</p>
                  <a className="cross-btn" name={index} onClick={this.removeItem}>x</a>
                </div>
              </li>
            ))
          }
        </ul>
        <button className="red-btn" onClick={this.toggleModal}>Add Item</button>
      </div>
      </div>
    )
  }
}