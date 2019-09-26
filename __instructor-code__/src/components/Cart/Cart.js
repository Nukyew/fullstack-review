import React, {Component} from 'react'
import CartGame from './CartGame'

export default class Cart extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="cart">
      Cart
      <CartGame/>
    </div>
    )
  }
}