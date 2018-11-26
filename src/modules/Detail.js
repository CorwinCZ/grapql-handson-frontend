import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const query = gql`
  query testPerson($itemId: ID!) {
    person(id: $itemId) {
      name
      eyeColor
    }
  }
`;

class Detail extends Component {
  render() {
    const { itemId } = this.props;
    if (!itemId) {
      return <div>No ID was given, please provide ID</div>;
    }

    const queryVariables = {
      itemId: itemId,
    };

    return (
      <Query query={query} variables={queryVariables}>
        {({ data, loading, error }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (loading) {
            return <div>Loading...</div>;
          }
          return (
            <div>
              name: {data.person.name}
              <br /> eye color: {data.person.eyeColor}
            </div>
          );

          return null;
        }}
      </Query>
    );
  }
}

export default Detail;
