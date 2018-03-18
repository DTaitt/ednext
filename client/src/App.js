//@flow
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import InfoCard from './components/InfoCard';
import InfoCardList from './components/InfoCardList';

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
    return <Fragment>
        <Header />
        <h2>General Assembly?</h2>
        <main>
          <InfoCard info={{ heading: "cost", body: 10000 }} />
          <InfoCard info={{ heading: "duration", body: 12 }} />
          <InfoCard info={{ heading: "financing", body: "yes" }} />
          <InfoCard info={{ heading: "career services", body: "yes" }} />
          <InfoCardList skills={['javascript','react','html','css',4,4,5,5,6,6,7,8]} />
        </main>
      </Fragment>;
  }
}