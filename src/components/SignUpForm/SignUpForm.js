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

Moment.locale('en')
momentLocalizer();

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
      gender: '',
      GenreOptions: [
        { value: 'Romance', key: 'Romance', text: 'Romance' },
        { value: 'Mystery', key: 'Mystery', text: 'Mystery' },
        { value: 'Musical', key: 'Musical', text: 'Musical' },
        { value: 'Fantasy', key: 'Fantasy', text: 'Fantasy' },
        { value: 'Drama', key: 'Drama', text: 'Drama' },
        { value: 'Horror', key: 'Horror', text: 'Horror' },
        { value: 'Biography', key: 'Biography', text: 'Biography' },
        { value: 'Action', key: 'Action', text: 'Action' },
        { value: 'Thriller', key: 'Thriller', text: 'Thriller' },
        { value: 'Sci-Fi', key: 'Sci-Fi', text: 'Sci-Fi' },
        { value: 'Comedy', key: 'Comedy', text: 'Comedy' },
        { value: 'Adventure', key: 'Adventure', text: 'Adventure' },
        { value: 'War', key: 'War', text: 'War' },
        { value: 'Family', key: 'Family', text: 'Family' },
        { value: 'Animation', key: 'Animation', text: 'Animation' },
        { value: 'Crime', key: 'Crime', text: 'Crime' },
      ]
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
    const { error } = this.props;
    return (
      <div className='container'>
        {/* <Header as='h3' dividing>
          Sign up
        </Header> */}
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
            <Dropdown placeholder='Select Genre' fluid multiple search selection options={this.state.GenreOptions} onChange={this.handleGenreChange} />
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
          <Button animated onClick={this.handleSubmit}>
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name='hand point up outline' />
            </Button.Content>
          </Button>
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
    },
    signupUser(userInfo) {
      dispatch(signupUser(userInfo));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));