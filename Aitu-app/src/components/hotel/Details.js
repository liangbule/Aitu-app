import React, { Component } from 'react'
import './Details.css'
import { List } from 'antd-mobile';
import HotelCard2 from './card2'
import {withRouter} from 'react-router-dom'

 class details extends Component {
    constructor(props){
      super(props)
    }
    Item = List.Item;
    Brief = this.Item.Brief;
    state = {
        disabled: false,
        card:[{name:'豪华大床房',tag:['闪住','预约发票','25平方米 2-6层 有窗 城景'],score:'4.6',price:'308',src:'https://s1.ax1x.com/2020/08/26/dR0vVK.png'},
        {name:'特价大床房(无窗)',tag:['闪住','预约发票','25平方米 2-6层 有窗 城景'],score:'4.9',price:'327',src:'https://s1.ax1x.com/2020/08/26/dR0Xb6.png'},
        {name:'行政套房',tag:['闪住','预约发票','25平方米 2-6层 有窗 城景'],score:'4.9',price:'498',src:'https://s1.ax1x.com/2020/08/26/dR0ODx.png'},
    ]
      }
    render() {
        return (
            <div className='details'>
                <img src='https://s1.ax1x.com/2020/08/25/dcvE0P.jpg'/>
                <div className='content'>
                    <div>
          <this.Item
          extra={'详情'}
          arrow="horizontal"
          multipleLine
          onClick={() => {this.props.history.push('/detailpages')}}
          platform="android"
        >
          维也纳酒店(上海浦东机场店)
          <this.Brief>Vienna Hotel (Shanghai Pudong Airport)</this.Brief>
        </this.Item>
        <this.Item extra={'108条评价'} multipleLine
          onClick={() => {}}
          platform="android">4.7 很棒 吃饭方便 交通便利</this.Item>
        <this.Item arrow="horizontal" multipleLine
          onClick={() => {}}
          platform="android">1月18日起 至 1月18日 共 1 天</this.Item>
          <this.Item arrow="horizontal" multipleLine
          onClick={() => {}}
          platform="android">房间:1 成人:2人 儿童:0人</this.Item>
                    </div>
                </div>

                {this.state.card.map((item)=>{
                    return<HotelCard2 key={item.name} item={item}>

                    </HotelCard2>
                  })}
            </div>

          
        )
    }
}

export default withRouter(details)
