import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import {BellOutlined} from '@ant-design/icons'
import './index.css'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liArrt:[
            {name:'我的收藏',link:"/"},
            {name:'浏览记录',link:"/"},
            {name:'我的订单',link:"/"},
            {name:'问答专区',link:"/"},
            {name:'我的优惠券',link:"/"},
            {name:'设置',link:"/"},
        ]
        }
    }
    
    render() {
        return (
            <div className="profile">
                <div className="header">
                <BellOutlined />
                    <div className="portrait">
                        <img src="https://s1.ax1x.com/2020/08/26/d2hX80.png"/>
                    </div>
                    <div className="userName">
                        <span>小可</span>
                        <p>开开心心每一天</p>
                    </div>
                </div>

                <div className="headerState">
                    <div className="fans"><span>56</span><p>粉丝</p></div>
                    <div className="follow"><span>52</span><p>关注</p></div>
                    <div className="likes"><span>1.1W</span><p>点赞</p></div>
                </div>

                <div className="content">
                    {this.state.liArrt.map((item,index)=>{
                        return <div key={index}>
                            <span><Link to={item.link}>{item.name}</Link></span>
                            <Link to={item.link}><img src="https://s1.ax1x.com/2020/08/26/d2hj2V.png"/></Link>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default withRouter(index)
