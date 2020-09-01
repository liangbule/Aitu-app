import React, { Component } from 'react'
import { CommentOutlined, SearchOutlined, RightOutlined, HeartOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import Banner from '../Banner/Banner'
import './home.scss'
import imgURL from '../../../assers/img/u157.png';
import imgURL2 from '../../../assers/img/u163.png';
import $axios from 'axios'


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.match.params._id,
            data: [],
        }
    }
    // 挂在完毕
    componentWillMount() {
        console.log('aaaa');
        let session = JSON.parse(sessionStorage.getItem(this.props.data))
        // console.log(session.token);
        $axios({
            method: 'get',
            url: '/api/home/homelist',
            // data:'',
            params: { _limit: 5 }
        }).then(res => {
            console.log("res", res);
            this.setState({
                data: res.data.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        console.log('1213', this.state.data);
        return (
            <div className="page" id="home">
                {/* 搜索框 */}
                <div className="seachhome">
                    <div className="seachbox" onClick={this.seachbox}>
                        <div className="seachicon">
                            <SearchOutlined style={{ fontSize: "20px", marginLeft: "10px", color: "#ccc" }} />
                        </div>
                        <div className="seachinput">请输入你想要的</div>
                    </div>
                    <CommentOutlined onClick={this.xiaoxi} style={{ fontSize: "25px", marginRight: "10px", width: "10%", lineHeight: "35px" }} />
                </div>
                {/* 轮播图 */}
                <div className="banner">
                    <Banner data={this.state._id} />
                </div>
                {/* 热门话题 */}
                <div className="hottopic">
                    <div className="hotheader">
                        <span>热门话题</span>
                        <RightOutlined style={{ float: "right" }} />
                    </div>
                    <div className="hottitle">
                        <ul>
                            <li>
                                <img src={imgURL} alt="" />
                                <span>超美的蓝色在约克半岛开启一场奇幻之旅</span>
                                <p>讨论中 : 15W</p>
                            </li>
                            <li>
                                <img src={imgURL2} alt="" />
                                <span>世界上最色的12座城，那一座让你心动？</span>
                                <p>讨论中 : 15W</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 旅游分享 */}
                <div className="homeshare">
                    <div className="sharebody">
                        <div className="shareheader">
                            <span>旅游分享</span>
                        </div>
                        <div className="sharelist">
                            {
                                this.state.data.map((v, index) => (
                                    <div className="shareChil" key={index}>
                                        <img src={v.imglisttwo} alt="" />
                                        < span > {v.title}</span>
                                        <div className="pelemt">
                                            <div className="pelemtimg">
                                                <img src={v.imglistone} alt="" />
                                            </div>
                                            <span>{v.name}</span>
                                            <div className="pelemtchile">
                                                <HeartOutlined />
                                                <span>{v.fabulous}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    seachbox = () => {
        this.props.history.push('./search')
        //    this.props.history.push({pathname:'./index/home/'+ _id })
    }
}
export default withRouter(index)
