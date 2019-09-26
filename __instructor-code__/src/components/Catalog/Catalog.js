import React, {Component} from 'react'
import Game from './Game'
import Hero from './Hero'

export default class Catalog extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }
  render() {
    return (
    <div className="catalog">
      <Hero/>
      <Game/>
    </div>
    )
  }
}