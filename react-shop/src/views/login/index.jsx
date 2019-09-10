import React, { Component } from 'react';
import {message, Form, Icon, Input, Button } from "antd";
import Axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            svg:"",
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                Axios.post("/buyer/user/login",values).then(res=>{
                    if(res.data.code===1){
                        message.success(res.data.msg)
                        this.props.history.replace("/my")
                    }else{
                        message.error(res.data.msg)
                    }
                    // console.log(res);
                })
            }
        });
    };
    handleRegistry(){
        this.props.history.push("/registry")
    };
    componentDidMount(){
        Axios.get("/buyer/user/captcha").then(res=>{
            // console.log(res.data.data)   
            if(res.data.code===1){
                this.setState({
                    svg:res.data.data
                })
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your Mobile phone number!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入手机号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input your Mobile phone number!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入验证码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    <Button type="primary" onClick={this.handleRegistry.bind(this)} className="login-form-button">
                        注册
                    </Button>
                </Form.Item>
            </Form>
            <p style={{ height: '102px', }} dangerouslySetInnerHTML={{ __html: this.state.svg }} ></p>
            </div>
        );
    }
}
const LoginForm = Form.create()(Login);
export default LoginForm;