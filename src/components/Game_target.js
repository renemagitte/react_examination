import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';


class Game_target extends Component {

  render() {      
      
    return (

        <button onClick={this.props.incrementCounter}>Klicka här</button>
        
    );
  }
}

export default Game_target;