//@flow
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

type Props = {};
type State = {
  bootcampData: Object[]
}

export default class App extends Component<Props, State> {

  state = {
    bootcampData: [],
    isBootcampDataLoaded: false,
    bootcampNames: [],
    currentBootcamp: 'general assembly',
  }

  handleDropdown = this.handleDropdown.bind(this);

  async componentDidMount() {
    let res = await axios.get('/all');
    this.setState({
      bootcampData: res.data,
      isBootcampDataLoaded: true,
    })
    this.makeBootcampNamesArray()
  }

  makeBootcampNamesArray() {
    this.state.bootcampData.forEach((obj) => {
      this.setState((prevState) => ({
        bootcampNames: [...prevState.bootcampNames, obj.bootcamp].sort(),
      }))
    })
  }

  handleDropdown(bootcamp) {
    this.setState({
      currentBootcamp: bootcamp,
    })
  }

  render() {
    console.log(this.state)
    return (
        <Fragment>
          <Header bootcampNames = {this.state.bootcampNames} currentBootcamp={this.state.currentBootcamp} handleDropdown={this.handleDropdown} />
          { 
            this.state.isBootcampDataLoaded 
            ? <Main bootcampData = { this.state.bootcampData } currentBootcamp={this.state.currentBootcamp} />
            : null
          }
        </Fragment>
    );
  }
}