import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { Campsites } from '../shared/campsites';
import { render } from 'react-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state ={
      campsites: Campsites
    };
  }


  render() {
    return <Directory campsites={this.state.campsites} />;
  }
}

export default Main;