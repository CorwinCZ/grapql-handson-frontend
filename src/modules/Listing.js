import React, { Component } from 'react';

import ListingItem from './ListingItem';

const dummyData = [
  {
    id: 'cGVvcGxlOjE=',
    name: 'Luke Skywalker',
  },
  {
    id: 'cGVvcGxlOjI=',
    name: 'C-3PO',
  },
  {
    id: 'cGVvcGxlOjM=',
    name: 'R2-D2',
  },
  {
    id: 'cGVvcGxlOjQ=',
    name: 'Darth Vader',
  },
  {
    id: 'cGVvcGxlOjU=',
    name: 'Leia Organa',
  },
  {
    id: 'cGVvcGxlOjY=',
    name: 'Owen Lars',
  },
  {
    id: 'cGVvcGxlOjc=',
    name: 'Beru Whitesun lars',
  },
  {
    id: 'cGVvcGxlOjg=',
    name: 'R5-D4',
  },
];

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
    };
  }

  componentDidMount = async () => {
    console.log('Mounted');
    const queryString = `{
  allPeople(first: 8) {
    people {
      id
      name
    }
  }
}`;

    const result = await fetch(
      `http://corwincz.cz:1111/?query=${encodeURIComponent(queryString)}`,
    ).then(response => response.json());

    console.log('Returned', result);
  };

  renderDataList = () => {
    const { data } = this.state;
    const { switchToDetail } = this.props;
    return data.map((item, index) => (
      <ListingItem key={index} data={item} switchToDetail={switchToDetail} />
    ));
  };

  render() {
    return <div>{this.renderDataList()}</div>;
  }
}

export default Listing;
