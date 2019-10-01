import React, {Component} from 'react'
import Game from './Game'
import Hero from './Hero'
import axios from 'axios'
import './catalog.css'

export default class Catalog extends Component{
    constructor(){
        super()
        this.state = {
            games: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/games').then(res => {
            this.setState({
                games: res.data
            })
        })
    }

    render() {
        return(
            <div className="catalog">
                <Hero />
                <div className="game-list">
                {this.state.games.map(game => (
                    <Game data={game}/>
                ))}
                </div>
                <button class="snipcart-add-item"
                    data-item-name="My Subscription"
                    data-item-id="subscription"
                    data-item-url="/"
                    data-item-price="20.00"
                    data-item-payment-interval="Month"
                    data-item-payment-interval-count="2"
                    data-item-payment-trial="10">
                    Subscribe now!
                </button>
                <button
                    class="snipcart-add-item"
                    data-item-id="2"
                    data-item-name="Bacon"
                    data-item-price="3.00"
                    data-item-weight="20"
                    data-item-url="/"
                    data-item-description="Some fresh bacon">
                    Buy bacon
                </button>
            </div>
        )
    }
}