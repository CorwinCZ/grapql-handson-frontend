import React, { Component } from 'react';

class ListingItem extends Component {
  render() {
    const { data, switchToDetail } = this.props;
    const { name, id } = data;
    return (
      <div
        onClick={() => {
          switchToDetail('detail', id);
        }}
      >
        {name} with id {id}
      </div>
    );
  }
}

export default ListingItem;
