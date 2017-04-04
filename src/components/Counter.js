import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';


class Counter extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    );
  }
}

export default Counter;