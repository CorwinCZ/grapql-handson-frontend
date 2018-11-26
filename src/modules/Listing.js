import React, { Component } from 'react';

import ListingItem from './ListingItem';

import { API_URL } from '../config';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}, {}],
    };
  }

  componentDidMount = async () => {
    const query = `query testQuery($itemsCount: Int!) {
  allPeople(first: $itemsCount) {
    people {
      id
      name
      mass
    }
  }
}`;
    const queryVariables = { itemsCount: 4 };

    const responseData = await fetch(
      `${API_URL}?query=${encodeURIComponent(
        query,
      )}&operationName=testQuery&variables=${encodeURIComponent(
        JSON.stringify(queryVariables),
      )}`,
    ).then(response => response.json());

    this.setState({ data: responseData.data.allPeople.people });
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
