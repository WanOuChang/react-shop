import React, { Component } from 'react';
import { message, Form, Icon, Input, Button } from "antd";
import axios from "axios";

class Registry extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                axios.post("/buyer/user/register",values).then(res=>{
                    // console.log(res)
                    if(res.data.code===1){
                        message.success(res.data.msg)
                        this.props.history.replace("/login")                      
                    }else{
                        message.error(res.data.msg)
                    }
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
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
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your Mobile phone number!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入昵称"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                  
                </Form.Item>
            </Form>
        );
    }
}
const Registrys = Form.create()(Registry);
export default Registrys;