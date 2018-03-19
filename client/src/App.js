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
  }

  async componentDidMount() {
    let res = await axios.get('/all');
    this.setState((prevState) => ({
      bootcampData: [...prevState.bootcampData, res.data],
    }))
  }

  render() {
    console.log(this.state.bootcampData[0])
    return (
        <Fragment>
          <Header />
          <Main />    
        </Fragment>
    );
  }
}