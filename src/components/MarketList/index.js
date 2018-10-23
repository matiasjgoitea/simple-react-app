import React from 'react'
import Modal from '../Modal'
import { getItems } from '../../api'
import './index.css'

export default class MarketList extends React.Component {
  state = {
    items: [],
    isModalOpen: false
  }
  componentDidMount() {
    getItems().then(items => this.setState({ items }))
  }
  saveItems = items => {
    localStorage.setItem('marketList', JSON.stringify(items))
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
        <p className="items-count">{items.length} Items</p>
        {
          items.length === 0 && <h3>List is empty</h3>
        }
        <ul className="items-container">
          {
            items.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <p className="item-name">{item}</p>
                  <button className="btn cross-btn" name={index} onClick={this.removeItem}>x</button>
                </div>
              </li>
            ))
          }
        </ul>
        <button className="btn blue-btn" onClick={this.toggleModal}>Add Item</button>
      </div>
    )
  }
}