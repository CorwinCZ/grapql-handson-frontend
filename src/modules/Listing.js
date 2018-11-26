import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ListingItem from './ListingItem';

import apolloClient from '../apolloClient';

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

  componentDidMount = () => {
    console.log('Mounted');
    apolloClient
      .query({
        query: gql`
          query testQuery {
            allPeople(first: 8) {
              people {
                id
                name
              }
            }
          }
        `,
      })
      .then(result => console.log('result', result));
  };

  renderDataList = () => {
    const { data } = this.state;
    const { switchToDetail } = this.props;
    return data.map((item, index) => (
      <ListingItem key={index} data={item} switchToDetail={switchToDetail} />
    ));
  };

  render() {
    return (
      <div>
        {this.renderDataList()}
        <Query
          query={gql`
            query testQuery {
              allPeople(first: 8) {
                people {
                  id
                  name
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            console.log('Inner data', data);
            return null;

            return data.rates.map(({ currency, rate }) => (
              <div key={currency}>
                <p>{`${currency}: ${rate}`}</p>
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default Listing;
