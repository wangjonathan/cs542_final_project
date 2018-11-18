import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Select from 'react-select'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker } from 'react-widgets';
import {
  Header,
  Button,
  Checkbox,
  Form,
  Dropdown,
  Radio,
  Icon,
  Message
} from 'semantic-ui-react'

import { signinUser, signupUser } from '../../actions/auth';
// import { genreOptions } from '../../../constant/options';
Moment.locale('en')
momentLocalizer();

import 'react-widgets/dist/css/react-widgets.css';
import './form.css';
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.handelUsernameChange = this.handelUsernameChange.bind(this);
    this.handelEmailChange = this.handelEmailChange.bind(this);
    this.handelPasswordChange = this.handelPasswordChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      dob: Moment(new Date()).format('MM/DD/YYYY'),
      fav_genres: [],
      gender: ''
    }
  }

  getValidationState() {
    const { error } = this.props;
    if (error) return 'error';
    return 'success';
  }

  handelUsernameChange(e) {
    this.setState(Object.assign({}, this.state, {
      username: e.target.value
    }));
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

  handleGenreChange(e, { value }) {
    this.setState(Object.assign({}, this.state, { fav_genres: value }))
  }

  handleDateChange(selectedDate) {
    const dob = Moment(selectedDate).format('MM/DD/YYYY');
    this.setState(Object.assign({}, this.state, { dob }));
  }

  handleGenderChange(e, { value }) {
    this.setState(Object.assign({}, this.state, { gender: value }));
  }

  handleSubmit(e) {
    const {
      username,
      email,
      password,
      dob,
      fav_genres,
      gender
    } = this.state
    this.props.signupUser({
      username,
      email,
      password,
      dob,
      fav_genres,
      gender
    });
  }

  render() {
    const { filterOptions } = this.state;
    const { genreOptions, error } = this.props;
    return (
      <div className='container'>
        <Message
          attached
          header='Welcome to our site!'
          content='Fill out the form below to sign-up for a new account'
        />
        <Form className='attached fluid segment' loading={this.props.isWaiting === 'true'}>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' onChange={this.handelUsernameChange} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={this.handelEmailChange} />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input placeholder='Password' type='password' onChange={this.handelPasswordChange} />
          </Form.Field>
          <Form.Field>
            <label>Favorite Genre</label>
            <Dropdown scrolling clearable placeholder='Select Genre' fluid multiple search selection options={genreOptions} onChange={this.handleGenreChange} />
          </Form.Field>
          <Form.Field>
            <label>Date of Birth</label>
            <DateTimePicker
              defaultValue={new Date()}
              time={false}
              format='MM/DD/YYYY'
              onChange={this.handleDateChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Radio
              label='Male'
              name='radioGroup'
              value='m'
              checked={this.state.gender === 'm'}
              onChange={this.handleGenderChange}
            />
            <Radio
              label='Female'
              name='radioGroup'
              value='f'
              checked={this.state.gender === 'f'}
              onChange={this.handleGenderChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button primary onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <Message attached='bottom' success>
          <Icon name='check' />
          Already signed up?&nbsp;<Link to='/signin'>Login here</Link>&nbsp;instead.
        </Message>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { auth, movies } = state;
  const { genres } = movies;
  return {
    error: auth.error,
    genreOptions: genres.map(genre => ({
      key: genre,
      value: genre,
      text: genre
    })),
    isWaiting: auth.isWaiting
  }
};

const mapDispatchToProps = dispatch => {
  return {
    siginUser(userInfo) {
      dispatch(signinUser(userInfo));
    },
    signupUser(userInfo) {
      dispatch(signupUser(userInfo));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));