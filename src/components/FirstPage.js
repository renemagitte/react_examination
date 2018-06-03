import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm from './UsernameForm';
import firstPageImg from './../img/firstPageImg.png';

class FirstPage extends Component {

  render() {
      
    return (
        <Container className="first_page">
            <img src={firstPageImg} />
            <UsernameForm handleUsername={ this.props.handleUsername } />
        </Container>
      );
    }
}

export default FirstPage;