import { Card } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HotelCard extends Component {
  constructor(props){
    super(props)
    this.state = this.props.item
  }
  
render(){
    return(
  <div className="hotelCard">
    {/* <WhiteSpace size="lg" /> */}
    
    <Card full style={{marginTop:'20px'}}>
    <Link to='/hotel/details'>
      <Card.Body style={{display:"flex",}}>
          
          <img src={this.state.src} />
        
        <div className="cardContent">

            <h4 className="cardName">{this.state.name}</h4>
            <img src='https://s1.ax1x.com/2020/08/26/d2Lszj.png' />

            <p className='cardTag'><span className="cardTag1">{this.state.tag[0]}</span><span className="cardTag2">{this.state.tag[1]}</span></p>
            <p className="cardSP"><span className="cardScore">{this.state.score}</span><span className="cardPrice">¥{this.state.price}</span></p>    
        </div>
      </Card.Body>
      </Link>
    </Card>
  </div>)
}
}

export default HotelCard