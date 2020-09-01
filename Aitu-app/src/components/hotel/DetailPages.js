import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './DetailPages.scss'


 class DetailPages extends Component {
    constructor(props){
        super(props)
      }
    backoff=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="DetailPages">
                <div className="DPheader"><img onClick={this.backoff} src="https://s1.ax1x.com/2020/08/27/dhkg4e.png" ></img><span>酒店详情</span></div>
                <div className="DPimg" ><img src="https://s1.ax1x.com/2020/08/25/dcvE0P.jpg"></img></div>
                <div className="DPtitle">酒店介绍</div>
                <div className="DPcontent">
                    <p>维也纳酒店（上海浦东机场店）位于浦东新区川南奉公路，近晨阳路，与迪士尼直线距离约8公里，可便捷到达地铁2号线凌空路站，交通便利。酒店周围生活设施齐全，旅游资源众多，有上海新国际博览中心、迪士尼、上海野生动物园、农艺大观园、三甲港滨海旅游区等。</p>

                　　<p>维也纳酒店（上海浦东机场店）是维也纳旗下的连锁酒店，装修豪华舒适，整体风格高贵典雅。客房宽敞明亮、温馨时尚，房内布置精美，处处体现人性化的理念。</p>

                　　<p>酒店还有宽敞停车场、休闲茶吧、宽敞会议室等，同时还为您提供精品早餐、浦东机场接机（需预约）等服务，是商务、休闲、会务的理想酒店。</p>
                </div>
            </div>
        )
    }
}

export default withRouter(DetailPages)
