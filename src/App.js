import React, { Component, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import './App.css';

const onComplete = () => {
  console.log('Completed! 👏');
};

const onStart = () => {
  console.log('Started! 💨');
};

class App extends Component {
  state = {
    salary: '',
    payday: '',
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <CountUp
            className="account-balance"
            start={0}
            end={30000000}
            duration={30000000}
            useEasing={true}
            useGrouping={true}
            separator=","
            decimals={3}
            decimal=","
            onComplete={onComplete}
            onStart={onStart}
          />
        </div>

        <Progress animated color="success" value="100" />
      </Fragment>
    );
  }
}

export default App;
