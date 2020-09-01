import {AimOutlined} from '@ant-design/icons'
import React, { Component } from 'react'
import { Button,} from 'antd-mobile';
class TabsView extends Component {
   

    render() {
        return (
            <div className="TabsView">
                    <div className="header">
                        <div className="place">
                        武汉    
                        </div> 
                        <div className="headerRight"><AimOutlined /><p>位置选择</p></div>
                    </div>

                    <div className="footer">
                        <div><p>入住</p>1月1日</div>
                        <div><p>时长</p>1天</div>
                        <div><p>退房</p>1月2日</div>
                        <div><p>房间数</p>1间</div>
                        <div><p>每间</p>2成人</div>
                        <div><p>&nbsp;</p>1儿童</div>
                    </div>
                    <Button type="primary" style={{backgroundColor:'rgba(40, 208, 148, 1)',marginTop:'10px'}}>立即预定</Button>
            </div>
        )
    }
}

export default TabsView
