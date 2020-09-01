import React, { Component } from 'react'
import { LeftOutlined, CloseOutlined, EnvironmentOutlined, RightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { ImagePicker ,Button ,Toast } from 'antd-mobile';
import './issud.scss'


const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

function successToast() {
    Toast.success('发布成功', 1);
  }
class index extends Component {
    state = {
        files: data,
    };
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };
    onAddImageClick = (e) => {
        e.preventDefault();
        this.setState({
            files: this.state.files.concat({
                url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                id: '3',
            }),
        });
    };
    onTabChange = (key) => {
        console.log(key);
    };
    render() {
        const { files } = this.state;
        return (
            <div className="isshead">
                <div className="clihbox  border-bottom">
                    <div className="issleft">
                        <LeftOutlined />
                    </div>
                    <div className="issfa">发布</div>
                </div>
                <div className="issinput border-bottom">
                    <input type="text" placeholder="请输入标题" />
                    <CloseOutlined style={{ position: "absolute", right: "10px", top: "40%", }} />
                </div>

                {/* <div className="isstextare border"> */}
                <textarea style={{ height: "200px", width: "90%", margin: "15px" }} placeholder="添加正文" />
                {/* </div> */}

                <div className="issaddres" >
                    <label>
                        <EnvironmentOutlined style={{ float: "left", marginLeft: "10px" }} />
                        <span>添加地点</span>
                    </label>

                    <RightOutlined style={{ float: "right", marginRight: "20px" }} />
                </div>
                <div>
                    <ImagePicker
                        length="6"
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 7}
                        onAddImageClick={this.onAddImageClick}
                        disableDelete
                    />
                </div>
                <Button style={{ backgroundColor: "rgba(40, 208, 148, 1)", height: "40px", color: "white", lineHeight: "40px"  , margin:"10px"}} onClick={successToast} >发布笔记</Button>
            </div>
        )
    }
}
export default withRouter(index)