import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import './login.scss'
import $axios from 'axios'
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            isNameShow: false,
            isNameHidd: false,
            isPassShow: false,
        }
    }

    render() {
        return (
            <div className="login">
                <div className="loginbox">
                    <div className="loginh">
                        <div className="logintitle">爱途旅游</div>
                        <div className="input1">
                            <input value={this.state.username} onFocus={this.Onusername} onChange={this.Onusername} type="text" placeholder="请输入账号" />
                            {this.state.isNameShow ? <span style={{ color: "#5eff00" }}>格式正确</span> : ''}
                            {this.state.isNameHidd ? <span style={{ color: "red" }}>请输入6-20位字母和数字组合账号</span> : ''}
                        </div>
                        <div className="input2">
                            <input value={this.state.password} onFocus={this.Onpassword} onChange={this.Onpassword} type="text" placeholder="请输入密码" />
                            {this.state.isPassShow ? <span style={{ color: "#5eff00" }}>请输入密码</span> : ''}
                        </div>
                        <Button style={{ backgroundColor: "rgba(40, 208, 148, 1)", height: "40px", color: "white", lineHeight: "40px" }} onClick={this.Login} >登录</Button>
                    </div>
                </div>
            </div>
        )
    }
    // 账号
    Onusername = (ev) => {
        const value = ev.target.value
        this.setState({
            username: value
        })
        var userNameReg1 = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/;
        if (userNameReg1.test(this.state.username)) {
            this.setState({
                isNameShow: true,
                isNameHidd: false,
            })
        } else {
            this.setState({
                isNameShow: false,
                isNameHidd: true,
            })
        }

    }
    // 密码
    Onpassword = (ev) => {
        const value = ev.target.value
        this.setState({
            password: value
        })
        if (this.state.password) {
            this.setState({
                isPassShow: false
            })
        }
    }

    Login = () => {
        let isShow = this.state.isNameShow
        let isHidd = this.state.isNameHidd
        let isPass = this.state.isPassShow
        let username = this.state.username
        let password = this.state.password
        // console.log(isShow);
        if (!password) {
            this.setState({
                isPassShow: true
            })
        } else {
            this.setState({
                isPassShow: false
            })
        }
        // console.log('isShow', isShow);
        // console.log('isHidd', isHidd);
        // console.log('isPass', isPass);

        if (isShow && !isHidd && !isPass) {
            $axios({
                method: 'post',
                url: '/api/login',
                data: { username: username, password: password }
            }).then(res => {
                // console.log(res.data.data._id);
                // console.log(res.data.token);
                // console.log(res.data.data.name);
                if (res.data.err === 0) {
                    let _id = res.data.data._id
                    let token =res.data;
                    // 存储
                    sessionStorage.setItem(_id,JSON.stringify(token));
                    this.props.history.push({pathname:'./index/home/'+ _id })
                } else {
                    alert("账号密码错误")
                }
            }).catch(err => {
                if (err) {
                    alert('登录失败')
                }
            })
        } else {
            alert('账号密码格式错误')
        }

    }
}
