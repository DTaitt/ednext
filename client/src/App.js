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
  }

  async componentDidMount() {
    let res = await axios.get('/all');
    this.setState({
      bootcampData: res.data,
      isBootcampDataLoaded: true,
    })
  }

  render() {
    console.log(this.state.bootcampData)
    return (
        <Fragment>
          <Header />
          { 
            this.state.isBootcampDataLoaded 
            ? <Main bootcampData = { this.state.bootcampData } />
            : null
          }
        </Fragment>
    );
  }
}