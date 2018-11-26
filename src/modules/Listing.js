import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Button } from 'reactstrap';

import ListingItem from './ListingItem';

const query = gql`
  query testQuery($itemsCount: Int!, $after: String!) {
    allPeople(first: $itemsCount, after: $after) {
      people {
        id
        name
      }
      edges {
        cursor
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
    const queryVariables = { itemsCount: 4, after: '' };

    return (
      <Query query={query} variables={queryVariables}>
        {({ data, loading, error, fetchMore }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (loading) {
            return <div>Loading...</div>;
          }

          const peopleList = data.allPeople.people;
          const lastElementCursor = data.allPeople.edges.pop()['cursor'];

          const loadMoreData = () => {
            fetchMore({
              variables: {
                after: lastElementCursor,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                return {
                  ...prev,
                  allPeople: {
                    ...prev.allPeople,
                    edges: [
                      ...prev.allPeople.edges,
                      ...fetchMoreResult.allPeople.edges,
                    ],
                    people: [
                      ...prev.allPeople.people,
                      ...fetchMoreResult.allPeople.people,
                    ],
                  },
                };
              },
            });
          };

          return (
            <div>
              <Button color="success" onClick={loadMoreData}>
                Load more
              </Button>
              {this.renderDataList(peopleList)}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Listing;
