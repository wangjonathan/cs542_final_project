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
  Radio,
  PageHeader
} from 'react-bootstrap';
import Select from 'react-select'
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker } from 'react-widgets';

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
      favGenre: [],
      gender: '',
      filterOptions: [
        { value: 'Romance', label: 'Romance' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'Musical', label: 'Musical' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Biography', label: 'Biography' },
        { value: 'Action', label: 'Action' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'War', label: 'War' },
        { value: 'Family', label: 'Family' },
        { value: 'Animation', label: 'Animation' },
        { value: 'Crime', label: 'Crime' },
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

  handleGenreChange(selectedGenre) {
    const favGenre = selectedGenre.map(genre => genre.value);
    this.setState(Object.assign({}, this.state, { favGenre }))
  }

  handleDateChange(selectedDate) {
    const dob = Moment(selectedDate).format('MM/DD/YYYY');
    this.setState(Object.assign({}, this.state, { dob }));
  }

  handleGenderChange(e) {
    const gender = e.target.value;
    this.setState(Object.assign({}, this.state, { gender }));
  }

  handleSubmit(e) {
    const {
      username,
      email,
      password,
      dob,
      favGenre,
      gender
    } = this.state
    this.props.signupUser({
      username,
      email,
      password,
      dob,
      favGenre,
      gender
    });
  }

  render() {
    const { filterOptions } = this.state;
    const { error } = this.props;
    return (
      <div className='container'>
        <PageHeader>
          Sign up
        </PageHeader>
        <form className='form'>
          <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" onChange={this.handelUsernameChange} />
          </FormGroup>
          <FormGroup validationState={this.getValidationState()}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" onChange={this.handelEmailChange} />
          </FormGroup>
          {!(this.getValidationState() === 'error') ||
            <Alert bsStyle="danger">
              <strong>{error}</strong>
            </Alert>
          }

          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.handelPasswordChange} />
          </FormGroup>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Favorite Genre - choose at least one</ControlLabel>
            <Select
              className='Select'
              isMulti
              options={filterOptions}
              onChange={this.handleGenreChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Date of Birth</ControlLabel>
            <DateTimePicker
              defaultValue={new Date()}
              time={false}
              format='MM/DD/YYYY'
              onChange={this.handleDateChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Gender </ControlLabel>{'  '}
            <Radio inline name='radioGroup' onChange={this.handleGenderChange} value='M'>Male</Radio>
            <Radio inline name='radioGroup' onChange={this.handleGenderChange} value='F'>Female</Radio>
          </FormGroup>
        </form>
        <Button bsStyle='primary' onClick={this.handleSubmit}>Sign up</Button>
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
    },
    signupUser(userInfo) {
      dispatch(signupUser(userInfo));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));