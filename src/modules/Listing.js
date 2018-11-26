import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListingItem from './ListingItem';

const query = gql`
  query testQuery($itemsCount: Int!) {
    allPeople(first: $itemsCount) {
      people {
        id
        name
        mass
      }
    }
  }
`;

class Listing extends Component {
  renderDataList = data => {
    const { switchToDetail } = this.props;
    return data.map((item, index) => (
      <ListingItem key={index} data={item} switchToDetail={switchToDetail} />
    ));
  };

  render() {
    const queryVariables = { itemsCount: 3 };

    return (
      <Query query={query} variables={queryVariables}>
        {({ data, loading, error }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (loading) {
            return <div>Loading...</div>;
          }

          console.log('Inside data', data);
          return this.renderDataList(data.allPeople.people);
        }}
      </Query>
    );
  }
}

export default Listing;
