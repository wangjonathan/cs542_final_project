import React, { Component } from 'react';
import {
  Segment,
  Image,
  Container,
  Grid,
  Header,
  Message,
  Icon
} from 'semantic-ui-react'
import history from '../history/history';

class Signout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 5
    }
  }

  componentDidMount() {
    // setTimeout(() => { history.push('/') }, 3000)
    let seconds = 3;
    setInterval(function countdown() {
      seconds--;
      if (seconds == 0) {
        history.push('/');
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <Container textAlign='center'>
          <Message
            success
            header='You have signed out successfully!'
            content={`You will be direct to home page in ${3} seconds`}
          />
        </Container>
      </div>
    );
  }
}

export default Signout;