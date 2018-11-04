import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { reduxForm } from 'redux-form';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Alert,
  PageHeader
} from 'react-bootstrap';

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
      <PageHeader>
          Sign in
        </PageHeader>
        <form className='form'>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" onChange={this.handelEmailChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.handelPasswordChange} />
          </FormGroup>
        </form>
        <Button bsStyle='primary' onClick={this.handleSubmit}>Sign in</Button>
        {!error ||
          <Alert bsStyle="danger">
            <strong>{error}</strong>
          </Alert>
        }
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    error: auth.error
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