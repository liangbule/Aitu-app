import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carouselaotu from './Carousel'
import Tabs from './Tabs'
import HotelCard from './card'
import './index.scss'

class index extends Component {
    contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      constructor(props){
        super(props)
        this.state = {
          card:[
            {name:'维也纳酒店(上海浦东机场店)',tag:['闪住','预约发票'],score:'4.6',price:'308',src:'https://s1.ax1x.com/2020/08/25/dcy0UO.png'},
            {name:'豪枫雅致酒店',tag:['闪住','预约发票'],score:'4.9',price:'327',src:'https://s1.ax1x.com/2020/08/26/d25q10.png'},
            {name:'云和夜泊酒店',tag:['闪住','预约发票'],score:'4.9',price:'498',src:'https://s1.ax1x.com/2020/08/26/d25LcV.png'},
            {name:'上海万信R酒店',tag:['闪住','预约发票'],score:'4.6',price:'398',src:'https://s1.ax1x.com/2020/08/26/d25bpq.png'}
          ]
        }
      }
    
    render() {
        return (
            <div className='hotel'>
               <Carouselaotu></Carouselaotu>
               <Tabs></Tabs>
               <div>
               <p style={{fontSize:'20px',fontWeight:800,marginTop:'20px'}}>酒店推荐</p>
                  {this.state.card.map((item)=>{
                    return<HotelCard key={item.name} item={item}>

                    </HotelCard>
                  })}

                 {/* <HotelCard ></HotelCard> */}
               </div>
            </div>
        )
    }
}
export default withRouter(index)