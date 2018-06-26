// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 'put text in me',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <button>{this.state.value}</button>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ControlledInput;
