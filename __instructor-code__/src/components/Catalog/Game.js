import React, {Component} from 'react'

export default class Game extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="game">
      <h3>{this.props.data.title}</h3>
      <img src={this.props.data.img} alt={this.props.data.title}/>
      <h4>${(this.props.data.price / 100).toFixed(2)}</h4>
    </div>
    )
  }
}