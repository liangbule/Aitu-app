import React ,{ Component }from 'react'
import {  withRouter  } from 'react-router-dom'
import './search.scss'
class index extends Component {
    // useCallback 防止每一次渲染这个组件 都构建这个函数

    render(){
        return (
            <div className="page subpage" id="search">
                <div>发布</div>
                <div>标题输入框</div>
                <div>正文输入框</div>
                <div>添加地址</div>
                <div>图片上传</div>

            </div>
        )
    }xw

}

export default withRouter(index)