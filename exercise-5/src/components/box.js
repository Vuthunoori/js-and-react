import React, { Component } from 'react';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      height: 100
    };
  }

  changeColorAndSize = () => {
    this.setState(prevState => ({
      color: prevState.color === 'blue' ? 'green' : 'blue',
      height: prevState.height * 2
    }));
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: this.state.color, height: this.state.height, width: 100 }}></div>
        <button onClick={this.changeColorAndSize}>Change Color and Size</button>
      </div>
    );
  }
}

export default ColorBox;
