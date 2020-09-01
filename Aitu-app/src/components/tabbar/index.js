import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {HomeOutlined,CompassOutlined,ShopOutlined,UserOutlined,PlusCircleOutlined} from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import './index.css'

 class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: true,
          
        };
      }
    render() {
        return(
            <div className="tarbar" style={this.state.fullScreen ? { position: 'fixed', width: '100%',bottom:0 } : { height: 400 }}>
            <TabBar

              unselectedTintColor="#333333"
              tintColor="#28D094"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="主页"
                key="home"  
                
                icon={<HomeOutlined style={{fontSize:'22px'}}/>
                }
                selectedIcon={<HomeOutlined style={{fontSize:'22px'}}/>
                }
                selected={this.state.selectedTab === 'blueTab'}
                // badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                  this.props.history.push("/index/home/:_id")
                  
                }}
                // data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={<CompassOutlined style={{fontSize:'22px'}}/>
                }
                selectedIcon={<CompassOutlined style={{fontSize:'22px'}}/>
                }
                title="发现"
                key="discover"
                // badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                  this.props.history.push("/index/discover")
                }}
                // data-seed="logId1"
              >
              </TabBar.Item>
                <TabBar.Item 
                icon={<PlusCircleOutlined style={{fontSize:'22px'}}/>}
                selectedIcon={<PlusCircleOutlined style={{fontSize:'22px'}}/>
              }
                title="发布"
                key="issued"
                selected={this.state.selectedTab === 'blackTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blackTab',
                  });
                  this.props.history.push("/index/issued")
                }}
                >
                  
                </TabBar.Item>
              <TabBar.Item
                icon={<ShopOutlined style={{fontSize:'22px'}}/>
                }
                selectedIcon={
                  <ShopOutlined style={{fontSize:'22px'}}/>
                }
                title="酒店"
                key="hotel"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                  this.props.history.push("/index/hotel")
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={<UserOutlined style={{fontSize:'22px'}}/>}
                selectedIcon={<UserOutlined style={{fontSize:'22px'}}/>}
                title="我的"
                key="profile"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                  this.props.history.push("/index/profile")

                }}
              >
              </TabBar.Item>
            </TabBar>
          </div>
        )
    }
}
export default withRouter(index)

            // <a href="#/home">跳转主页</a>
            // <br></br>
            //     <a href="#/discover">跳转发现</a>
            //     <br></br>
            //     <a href="#/issued">跳转发布</a>
            //     <br></br>
            //     <a href="#/hotel">跳转酒店</a>
            //     <br></br>
            //     <a href="#/profile">跳转我的</a>