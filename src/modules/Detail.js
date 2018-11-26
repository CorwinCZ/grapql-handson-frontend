import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const { itemId } = this.props;
    if (!itemId) {
      return <div>No ID was given, please provide ID</div>;
    }
    return <div>This is detail</div>;
  }
}

export default Detail;
