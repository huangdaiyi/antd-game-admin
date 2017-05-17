import React, { Component } from 'react';
import { Button, Row, Form, Input, message } from 'antd';
import config from '../utils/config';

const FormItem = Form.Item;


class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      loading: false,
    };
  }
  showerror() {
    message.error('帐号或密码错误');
  }
  handleSubmit(event) {
    const { history, form } = this.props;
    event.preventDefault();
    form.validateFields((error, values) => {
      if (!error) {
        this.setState({ loading: !this.state.loading });
        // 模拟登录操作
        setTimeout(() => {
          if (values.userName !== 'guest' || values.password !== 'guest') {
            this.showerror();
            this.setState({ loading: !this.state.loading });
          } else {
            history.push('/');
          }
        }, 1000);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const loginLoading = this.state.loading;
    return (
      <div className="login">
        <div className="form">
          <div className="logo">
            <img alt={'logo'} src={config.logo} />
            <span>{config.name}</span>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input size="large" placeholder="Username" onPressEnter={this.handleSubmit} />,
         )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  size="large" type="password" placeholder="Password"
                  onPressEnter={this.handleSubmit}
                />,
         )}
            </FormItem>
            <Row>
              <Button
                type="primary" size="large"
                onClick={this.handleSubmit} loading={loginLoading}
              >
             Sign in
           </Button>
              <p>
                <span>Username：guest</span>
                <span>Password：guest</span>
              </p>
            </Row>

          </form>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  form: React.PropTypes.object.isRequired,
};


export default Form.create()(Main);
