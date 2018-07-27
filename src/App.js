import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { HorizontalBar } from 'react-chartjs-2';

injectGlobal`
  body {
    padding:0;
    margin:0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const data = {};

class App extends Component {
  render() {
    return (
      <Container>
        <div>PAY DAY</div>
        <HorizontalBar
          data={data}
          width={100}
          height={10}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </Container>
    );
  }
}

export default App;
