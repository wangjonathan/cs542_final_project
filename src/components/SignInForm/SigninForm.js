import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  Header,
  Button,
  Checkbox,
  Form,
  Dropdown,
  Radio,
  Message
} from 'semantic-ui-react'

import { signinUser } from '../../actions/auth';

import '../SignUpForm/form.css';
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.handelEmailChange = this.handelEmailChange.bind(this);
    this.handelPasswordChange = this.handelPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handelEmailChange(e) {
    this.setState(Object.assign({}, this.state, {
      email: e.target.value
    }));
  }

  handelPasswordChange(e) {
    this.setState(Object.assign({}, this.state, {
      password: e.target.value
    }));
  }

  handleSubmit() {
    // console.log(e);
    this.props.siginUser({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    const { filterOptions } = this.state;
    const { error } = this.props;
    return (
      <div className='container'>
        <Header as='h3' dividing>
          Sign in
        </Header>
        <Form loading={this.props.isWaiting === 'true'}>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={this.handelEmailChange} />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input placeholder='Password' type='password' onChange={this.handelPasswordChange} />
          </Form.Field>
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {!error || <Message
              error
              header='Action Forbidden'
              content={error}
            />}
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    error: auth.error,
    isWaiting: auth.isWaiting
  }
};

const mapDispatchToProps = dispatch => {
  return {
    siginUser(userInfo) {
      dispatch(signinUser(userInfo));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInForm));