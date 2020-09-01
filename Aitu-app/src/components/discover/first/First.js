import React, { Component } from 'react'
import Cards from './Cards'
import Cardss from './Cardss'
import Cardsss from './Cardsss'
//import Cards from './Cardssss'
//import {Cards} from './styled'

export default class first extends Component {
    render() {
        return (
            <div>
                <Cards history={this.props.history}/>
                <Cardss></Cardss>
                <Cardsss></Cardsss>
                
            </div>
        )
    }
}
