import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }

  inc() {
    this.setState({ num: ++this.state.num });
  }

  dec() {
    this.setState({ num: --this.state.num });
  }

  render() {
    return (
      <>
        <h1>{this.state.num}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    );
  }
}

export default ClassCounter;
